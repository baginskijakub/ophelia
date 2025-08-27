"use server";

import { withAuth } from "@workos-inc/authkit-nextjs";
import { db } from "@ophelia/db";
import { notFound } from "next/navigation";

export async function checkOrgAccess(organizationName: string) {
  const { user } = await withAuth();

  if (!user) {
    notFound();
  }

  const { data: membership } =
    await db.organizationMemberships.getByUserAndOrganization(
      user.id,
      organizationName,
    );

  console.log("membership", membership, user);

  if (!membership) {
    notFound();
  }

  return {
    hasAccess: true,
    membership,
    user,
  };
}
