import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationMembershipsTable } from "../../schema";

interface CreateOrganizationMembershipParams {
  id: string;
  userId: string;
  workosOrgId: string;
  role?: string;
}

export const create = async (
  params: CreateOrganizationMembershipParams,
): ResultPromise<boolean> => {
  const org = await db.query.organizationsTable.findFirst({
    columns: {
      name: true,
    },
    where: (org, { eq }) => eq(org.workosId, params.workosOrgId),
  });

  if (!org) {
    return { data: null, error: "server-error" };
  }

  const { error } = await tryCatch(
    db
      .insert(organizationMembershipsTable)
      .values({
        id: params.id,
        userId: params.userId,
        organizationName: org.name,
        role: params.role,
      })
      .onConflictDoNothing(),
  );

  if (error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
