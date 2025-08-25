import { eq } from "drizzle-orm";
import { db } from "../../database";
import { applicationsTable } from "../../schema";

export const discardApplication = async (applicationId: number) => {
  const [updatedApplication] = await db
    .update(applicationsTable)
    .set({
      isDiscarded: true,
      pipelineStatusId: null, // Remove from pipeline when discarded
    })
    .where(eq(applicationsTable.id, applicationId))
    .returning();

  return updatedApplication;
};
