import { eq } from "drizzle-orm";
import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { usersTable } from "../../schema";
import { tryCatch } from "@ophelia/utils";

export const get = async (
  userId: string,
): ResultPromise<{ id: string } | null> => {
  const { data, error } = await tryCatch(
    db.query.usersTable.findFirst({
      where: eq(usersTable.id, userId),
    }),
  );

  if (error) {
    return { data: null, error: "server-error" };
  }

  return { data: data || null, error: null };
};
