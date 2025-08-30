import { tryCatch } from "@ophelia/utils";
import { db } from "../../database";
import {
  applicationsTable,
  listingsTable,
  pipelineStatusesTable,
} from "../../schema";
import { and, eq } from "drizzle-orm";
import { ResultPromise } from "@ophelia/types";

type ListingDto = typeof listingsTable.$inferSelect;
type PipelineStatusDto = typeof pipelineStatusesTable.$inferSelect;
export type ApplicationAggregate = typeof applicationsTable.$inferSelect & {
  listing: ListingDto;
  pipelineStatus: PipelineStatusDto | null;
};

export const getAggregate = async (
  listingId: number,
  email: string,
): ResultPromise<ApplicationAggregate> => {
  const { data, error } = await tryCatch(
    db.query.applicationsTable.findFirst({
      where: and(
        eq(applicationsTable.email, email),
        eq(applicationsTable.listingId, listingId),
      ),
      with: { listing: true, pipelineStatus: true },
    }),
  );

  if (error || !data) {
    return {
      data: null,
      error: "server-error",
    };
  }

  return {
    data,
    error: null,
  };
};

export const getById = async (
  listingId: number,
  id: number,
): ResultPromise<ApplicationAggregate> => {
  const { data, error } = await tryCatch(
    db.query.applicationsTable.findFirst({
      where: and(
        eq(applicationsTable.id, id),
        eq(applicationsTable.listingId, listingId),
      ),
      with: { listing: true, pipelineStatus: true },
    }),
  );

  if (error || !data) {
    return {
      data: null,
      error: "server-error",
    };
  }

  return {
    data,
    error: null,
  };
};
