import { eq } from "drizzle-orm";
import { db } from "../../database";
import { applicationsTable } from "../../schema";

export const updateApplicationPipelineStatus = async (
  applicationId: number,
  pipelineStatusId: number | null,
) => {
  const [updatedApplication] = await db
    .update(applicationsTable)
    .set({ pipelineStatusId })
    .where(eq(applicationsTable.id, applicationId))
    .returning();

  return updatedApplication;
};
