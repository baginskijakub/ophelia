import { eq } from "drizzle-orm";
import { db } from "../../database";
import { applicationsTable } from "../../schema";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";

export const discardApplication = async (
  applicationId: number,
): ResultPromise<boolean> => {
  const result = await tryCatch(
    db
      .update(applicationsTable)
      .set({
        isDiscarded: true,
        pipelineStatusId: null, // Remove from pipeline when discarded
      })
      .where(eq(applicationsTable.id, applicationId)),
  );

  if (result.error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
