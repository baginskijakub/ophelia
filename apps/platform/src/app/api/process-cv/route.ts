import { NextRequest, NextResponse } from "next/server";
import { applicationsTable, db, listingsTable } from "@ophelia/db";
import { tryCatch } from "@ophelia/utils";
import { and, eq } from "drizzle-orm";
import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { ProcessCVRequest, analyzeCVContent } from "./_helpers";

const handler = async (req: NextRequest) => {
  try {
    const { email, listingId }: ProcessCVRequest = await req.json();

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

    // Process CV with OCR and AI analysis
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
          requirementsMet: analysis.requirementsMet,
          requirementsNotMet: analysis.requirementsNotMet,
          aiSummary: analysis.aiSummary,
          ocrSummary: analysis.ocrSummary,
          projects: analysis.projects,
          workExperience: analysis.workExperience,
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
};

export const POST = verifySignatureAppRouter(handler);
