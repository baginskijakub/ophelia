import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { usersTable } from "../../schema";

interface CreateUserParams {
  id: string;
}

export const create = async (
  params: CreateUserParams,
): ResultPromise<boolean> => {
  const { error } = await tryCatch(
    db
      .insert(usersTable)
      .values({
        id: params.id,
      })
      .onConflictDoNothing(),
  );

  if (error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
