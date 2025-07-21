"use server";

import { withAuth } from "@workos-inc/authkit-nextjs";
import { db } from "@ophelia/db";
import { notFound } from "next/navigation";

export async function checkOrgAccess(organizationId: string) {
  const { user } = await withAuth();

  if (!user) {
    notFound();
  }

  const { data: membership } =
    await db.organizationMemberships.getByUserAndOrganization(
      user.id,
      organizationId,
    );

  if (!membership) {
    notFound();
  }

  return {
    hasAccess: true,
    membership,
    user,
  };
}
