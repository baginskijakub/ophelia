import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { z } from "zod";
import { CVProcessingResult } from "@ophelia/db";
import pdf from "pdf-parse";
import { CVAnalysisInput } from "./types";
import { tryCatch } from "@ophelia/utils";

export async function analyzeCVContent(
  input: CVAnalysisInput,
): Promise<CVProcessingResult> {
  try {
    // 1. Download PDF directly using the file key
    const fileUrl = `https://${process.env.UPLOADTHING_APP_ID}.ufs.sh/f/${input.resumeFileKey}`;

    const { data: fileResponse, error: fetchError } = await tryCatch(
      fetch(fileUrl),
    );

    if (fetchError || !fileResponse) {
      throw new Error("Failed to fetch file");
    }

    const arrayBuffer = await fileResponse.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let extractedText: string;
    try {
      const pdfData = await pdf(buffer);
      extractedText = pdfData.text;
    } catch {
      extractedText = buffer.toString("utf-8");
    }

    if (!extractedText.trim()) {
      throw new Error("No text content found in resume");
    }

    const ocrSchema = z.object({
      ocrSummary: z
        .string()
        .describe("Extract the summary/objective section exactly as written"),
      projects: z.array(
        z.object({
          name: z.string().describe("Project name exactly as written"),
          description: z
            .string()
            .describe("Project description exactly as written"),
          date: z
            .string()
            .optional()
            .describe("Date exactly as written if mentioned"),
          link: z
            .string()
            .optional()
            .describe("Link exactly as written if mentioned"),
        }),
      ),
      workExperience: z.array(
        z.object({
          position: z.string().describe("Job title exactly as written"),
          company: z.string().describe("Company name exactly as written"),
          date: z.string().describe("Employment dates exactly as written"),
          description: z
            .string()
            .describe("Job description/responsibilities exactly as written"),
        }),
      ),
    });

    const requirementsSchema = z.object({
      requirementsMet: z
        .array(z.string())
        .describe(
          "List specific requirements that the candidate clearly meets",
        ),
      requirementsNotMet: z
        .array(z.string())
        .describe("List specific requirements that the candidate doesn't meet"),
      aiSummary: z
        .string()
        .describe("Brief AI analysis of overall candidate fit and potential"),
    });

    // 3. Extract OCR data word-for-word
    const { object: ocrData } = await generateObject({
      model: google("gemini-2.5-flash"),
      schema: ocrSchema,
      prompt: `
      Extract the following information WORD-FOR-WORD from this resume text. Do not paraphrase, summarize, or modify the text - copy it exactly as written in the CV.

      RESUME TEXT:
      ${extractedText}

      IMPORTANT:
      - Copy text EXACTLY as it appears - preserve all wording, formatting, and phrasing
      - If a section doesn't exist, return empty array [] or empty string ""
      - Do not interpret, summarize, or rephrase anything
      - Maintain the original capitalization, punctuation, and grammar`,
    });

    // 4. Analyze requirements
    const { object: requirementsData } = await generateObject({
      model: google("gemini-2.5-flash"),
      schema: requirementsSchema,
      prompt: `
        Analyze this resume against the job requirements and return ONLY the requirements analysis.

        APPLICANT: ${input.applicantName}
        JOB TITLE: ${input.jobTitle}
        JOB DESCRIPTION & REQUIREMENTS:
        ${input.jobDescription}

        RESUME CONTENT:
        ${extractedText}

        Focus only on factual requirement matching. Be specific about which requirements are met/not met.`,
    });

    return {
      ocrSummary: ocrData.ocrSummary,
      projects: ocrData.projects,
      workExperience: ocrData.workExperience,
      requirementsMet: requirementsData.requirementsMet,
      requirementsNotMet: requirementsData.requirementsNotMet,
      aiSummary: requirementsData.aiSummary,
    };
  } catch (error) {
    console.error("CV analysis error:", error);
    return {
      ocrSummary: "OCR extraction failed - manual review required",
      projects: [],
      workExperience: [],
      requirementsMet: [],
      requirementsNotMet: [],
      aiSummary: "Processing failed - manual review required",
    };
  }
}
