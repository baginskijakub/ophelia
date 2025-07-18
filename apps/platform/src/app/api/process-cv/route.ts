import { NextRequest, NextResponse } from "next/server";
import { applicationsTable, db, listingsTable, organizationsTable } from "@ophelia/db";
import { tryCatch } from "@ophelia/utils";
import { and, eq } from "drizzle-orm";
import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";
import { ProcessCVRequest, analyzeCVContent } from "./_helpers";

const handler = async (req: NextRequest) => {
  try {
    const { email, listingId }: ProcessCVRequest = await req.json();

    const { data: application, error: fetchError } = await db.applications.getAggregate(listingId, email);

    if (fetchError || !application) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 },
      );
    }

    // Process CV with OCR and AI analysis
    const analysis = await analyzeCVContent({
      applicantName: `${application.firstName} ${application.lastName}`,
      resumeFileKey: application.resumeFileKey,
      jobTitle: application.listing.title,
      jobDescription: application.listing.contentBlocks.map((block) => block.content).join("\n"),
    });

    // Save processed data to database
    const { error: updateError } = await db.applications.updateAnalysis(listingId, email, analysis)

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
