import { eq } from "drizzle-orm";
import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { organizationsTable } from "../../schema";
import { tryCatch } from "@ophelia/utils";

export const updateWorkosId = async (
  orgName: string,
  workosId: string,
): ResultPromise<boolean> => {
  const { error } = await tryCatch(
    db
      .update(organizationsTable)
      .set({
        workosId,
        updatedAt: new Date(),
      })
      .where(eq(organizationsTable.name, orgName)),
  );

  if (error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
