import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { eq } from "drizzle-orm";
import { organizationsTable } from "../../schema";

type OrganizationDto = typeof organizationsTable.$inferSelect;

export const get = async (name: string): ResultPromise<OrganizationDto> => {
  const { data, error } = await tryCatch(
    db.query.organizationsTable.findFirst({
      where: eq(organizationsTable.name, name),
    }),
  );

  if (error || !data) {
    return { data: null, error: "not-found" };
  }

  return {
    data,
    error: null,
  };
};
