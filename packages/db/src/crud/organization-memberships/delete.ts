import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationMembershipsTable } from "../../schema";
import { eq } from "drizzle-orm";

export const remove = async (membershipId: string): ResultPromise<boolean> => {
  const { error } = await tryCatch(
    db
      .delete(organizationMembershipsTable)
      .where(eq(organizationMembershipsTable.id, membershipId)),
  );

  if (error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
