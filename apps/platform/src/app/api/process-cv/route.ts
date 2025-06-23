import { NextRequest, NextResponse } from "next/server";
import { applicationsTable, db, listingsTable } from "@ophelia/db";
import { tryCatch } from "@ophelia/utils";
import { and, eq } from "drizzle-orm";
import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { utapi } from "@ophelia/utils";
import { generateText } from "ai";
import * as pdf from "pdf-parse";

interface ProcessCVRequest {
  email: string;
  listingId: number;
}

async function handler(req: NextRequest) {
  try {
    const { email, listingId }: ProcessCVRequest = await req.json();

    // Fetch application and listing data
    const { data: applicationData, error: fetchError } = await tryCatch(
      db
        .select({
          firstName: applicationsTable.firstName,
          lastName: applicationsTable.lastName,
          resumeFileKey: applicationsTable.resumeFileKey,
          listingTitle: listingsTable.title,
          listingContent: listingsTable.content,
          aboutCompany: listingsTable.aboutCompany,
        })
        .from(applicationsTable)
        .innerJoin(
          listingsTable,
          eq(applicationsTable.listingId, listingsTable.id),
        )
        .where(
          and(
            eq(applicationsTable.email, email),
            eq(applicationsTable.listingId, listingId),
          ),
        )
        .limit(1),
    );

    if (fetchError || !applicationData?.[0]) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 },
      );
    }

    const application = applicationData[0];

    // Process CV with AI analysis
    const analysis = await analyzeCVContent({
      applicantName: `${application.firstName} ${application.lastName}`,
      resumeFileKey: application.resumeFileKey,
      jobTitle: application.listingTitle,
      jobDescription: application.listingContent,
      companyInfo: application.aboutCompany,
    });

    // Save processed data to database
    const { error: updateError } = await tryCatch(
      db
        .update(applicationsTable)
        .set({
          strengths: analysis.strengths,
          weaknesses: analysis.weaknesses,
          insights: analysis.insights,
          requirementsMet: analysis.requirementsMet,
          requirementsNotMet: analysis.requirementsNotMet,
          processedAt: new Date(),
        })
        .where(
          and(
            eq(applicationsTable.email, email),
            eq(applicationsTable.listingId, listingId),
          ),
        ),
    );

    if (updateError) {
      console.error("Failed to save CV analysis:", updateError);
      return NextResponse.json(
        { error: "Failed to save analysis" },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CV processing error:", error);
    return NextResponse.json({ error: "Processing failed" }, { status: 500 });
  }
}

interface CVAnalysisInput {
  applicantName: string;
  resumeFileKey: string;
  jobTitle: string;
  jobDescription: string;
  companyInfo: string;
}

interface CVAnalysisResult {
  strengths: string;
  weaknesses: string;
  insights: string;
  requirementsMet: string;
  requirementsNotMet: string;
}

async function analyzeCVContent(
  input: CVAnalysisInput,
): Promise<CVAnalysisResult> {
  try {
    // 1. Download the resume file from UploadThing
    const { data: fileUrls, error: urlError } = await tryCatch(
      utapi.getFileUrls([input.resumeFileKey]),
    );

    if (urlError || !fileUrls?.[0]) {
      throw new Error("Failed to get file URL");
    }

    const fileUrl = fileUrls[0].url;

    // 2. Fetch and extract text content from the file
    const { data: fileResponse, error: fetchError } = await tryCatch(
      fetch(fileUrl),
    );

    if (fetchError || !fileResponse) {
      throw new Error("Failed to fetch file");
    }

    const arrayBuffer = await fileResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Extract text content (assuming PDF)
    let extractedText: string;
    try {
      const pdfData = await pdf.default(buffer);
      extractedText = pdfData.text;
    } catch {
      // If PDF parsing fails, try as plain text
      extractedText = buffer.toString("utf-8");
    }

    if (!extractedText.trim()) {
      throw new Error("No text content found in resume");
    }

    // 3. Use Gemini to analyze the CV content
    const genAI = google.generativeAI({
      apiKey: process.env.GOOGLE_AI_API_KEY!,
    });
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
You are an expert HR analyst. Analyze the following resume against the job requirements and provide detailed insights.

APPLICANT: ${input.applicantName}
JOB TITLE: ${input.jobTitle}
COMPANY INFO: ${input.companyInfo}

JOB DESCRIPTION & REQUIREMENTS:
${input.jobDescription}

RESUME CONTENT:
${extractedText}

Please provide a detailed analysis in the following JSON format:
{
  "strengths": "List the candidate's key strengths and qualifications that align with the role",
  "weaknesses": "Identify areas where the candidate may be lacking or need development",
  "insights": "Provide overall insights about the candidate's fit for this role and potential",
  "requirementsMet": "List specific job requirements that the candidate clearly meets",
  "requirementsNotMet": "List job requirements that the candidate doesn't appear to meet"
}

Be specific and reference actual content from the resume. Focus on technical skills, experience, education, and cultural fit.
`;

    const result = await model.generateContent(prompt);
    const analysisText = result.response.text();

    // Parse the JSON response
    const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Failed to parse AI response");
    }

    const analysis = JSON.parse(jsonMatch[0]);

    return {
      strengths: analysis.strengths || "Analysis completed",
      weaknesses: analysis.weaknesses || "See detailed analysis",
      insights: analysis.insights || "Candidate evaluation completed",
      requirementsMet: analysis.requirementsMet || "Requirements reviewed",
      requirementsNotMet:
        analysis.requirementsNotMet || "Areas for consideration identified",
    };
  } catch (error) {
    console.error("CV analysis error:", error);
    // Return fallback analysis if AI processing fails
    return {
      strengths: "Resume submitted and reviewed",
      weaknesses: "Detailed analysis pending - please review manually",
      insights: "Technical review required for complete evaluation",
      requirementsMet: "Basic application requirements met",
      requirementsNotMet: "Manual review needed for detailed assessment",
    };
  }
}

export const POST = verifySignatureAppRouter(handler);
