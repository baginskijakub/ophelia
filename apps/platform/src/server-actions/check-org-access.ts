"use server";

import { withAuth } from "@workos-inc/authkit-nextjs";
import { db } from "@ophelia/db";
import { organizationMembershipsTable } from "@ophelia/db/src/schema";
import { and, eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export async function checkOrgAccess(organizationId: string) {
  const { user } = await withAuth();

  if (!user) {
    notFound();
  }

  // Check if user is a member of this organization
  const membership = await db
    .select()
    .from(organizationMembershipsTable)
    .where(
      and(
        eq(organizationMembershipsTable.userId, user.id),
        eq(organizationMembershipsTable.organizationId, organizationId),
      ),
    )
    .limit(1);

  if (membership.length === 0) {
    // User is not a member of this organization
    notFound();
  }

  return {
    hasAccess: true,
    membership: membership[0],
    user,
  };
}
