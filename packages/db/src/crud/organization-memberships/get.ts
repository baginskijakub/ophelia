import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationMembershipsTable } from "../../schema";
import { and, eq } from "drizzle-orm";

type OrganizationMembershipDto =
  typeof organizationMembershipsTable.$inferSelect;

export const getByUserAndOrganization = async (
  userId: string,
  organizationId: string,
): ResultPromise<OrganizationMembershipDto | null> => {
  const { data, error } = await tryCatch(
    db
      .select()
      .from(organizationMembershipsTable)
      .where(
        and(
          eq(organizationMembershipsTable.userId, userId),
          eq(organizationMembershipsTable.organizationId, organizationId),
        ),
      )
      .limit(1),
  );

  if (error || !data || data.length === 0) {
    return { data: null, error: "not-found" };
  }

  return {
    data: data[0]!,
    error: null,
  };
};
