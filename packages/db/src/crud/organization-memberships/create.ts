import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationMembershipsTable } from "../../schema";

interface CreateOrganizationMembershipParams {
  id: string;
  userId: string;
  organizationId: string;
  role?: string;
}

export const create = async (
  params: CreateOrganizationMembershipParams,
): ResultPromise<boolean> => {
  const { error } = await tryCatch(
    db
      .insert(organizationMembershipsTable)
      .values({
        id: params.id,
        userId: params.userId,
        organizationId: params.organizationId,
        role: params.role,
      })
      .onConflictDoNothing(),
  );

  if (error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
