import { and, eq } from "drizzle-orm";
import { applicationsTable } from "../../schema";
import { db } from "../../database";
import { tryCatch } from "@ophelia/utils";
import { ResultPromise } from "@ophelia/types";

export type AnalysisResult = Pick<
  typeof applicationsTable.$inferInsert,
  | "workExperience"
  | "projects"
  | "requirementsMet"
  | "requirementsNotMet"
  | "aiSummary"
  | "ocrSummary"
>;

export const updateAnalysis = async (
  listingId: number,
  email: string,
  analysis: AnalysisResult,
): ResultPromise<boolean> => {
  const { error } = await tryCatch(
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

  if (error) {
    return {
      data: null,
      error: "server-error",
    };
  }

  return {
    data: true,
    error: null,
  };
};
