import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationsTable } from "../../schema";
import { eq } from "drizzle-orm";

export const remove = async (
  organizationId: string,
): ResultPromise<boolean> => {
  const { error } = await tryCatch(
    db
      .delete(organizationsTable)
      .where(eq(organizationsTable.id, organizationId)),
  );

  if (error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
