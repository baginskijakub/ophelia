import { eq, and } from "drizzle-orm";
import { db } from "../../database";
import { applicationsTable, pipelineStatusesTable } from "../../schema";
import { tryCatch } from "@ophelia/utils";
import { ResultPromise } from "@ophelia/types";

export const updateApplicationPipelineStatus = async (
  applicationId: number,
  statusOrder: number,
  listingId: number,
): ResultPromise<boolean> => {

  const { data: pipelineStatus, error: fetchError } = await tryCatch(
    db.query.pipelineStatusesTable.findFirst({
      where: and(
        eq(pipelineStatusesTable.listingId, listingId),
        eq(pipelineStatusesTable.order, statusOrder),
      ),
    }),
  );

  if (fetchError || !pipelineStatus) {
    return { data: null, error: "not-found" };
  }

  const { error: updateError } = await tryCatch(
    db
      .update(applicationsTable)
      .set({ pipelineStatusId: pipelineStatus.id })
      .where(eq(applicationsTable.id, applicationId)),
  );

  if (updateError) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
