import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { usersTable } from "../../schema";
import { eq } from "drizzle-orm";

export const remove = async (userId: string): ResultPromise<boolean> => {
  const { error } = await tryCatch(
    db.delete(usersTable).where(eq(usersTable.id, userId)),
  );

  if (error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
