"use server";

import { withAuth } from "@workos-inc/authkit-nextjs";
import { db, organizationMembershipsTable } from "@ophelia/db";
import { organizationsTable } from "@ophelia/db/src/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export const getUserOrganizations = async () => {
  const { user } = await withAuth();

  if (!user) {
    return notFound();
  }

  try {
    const organizations = await db
      .select({
        id: organizationsTable.id,
        name: organizationsTable.name,
        logo: organizationsTable.logo,
        theme: organizationsTable.theme,
        mode: organizationsTable.mode,
        hue: organizationsTable.hue,
        rounding: organizationsTable.rounding,
        font: organizationsTable.font,
      })
      .from(organizationsTable)
      .innerJoin(
        organizationMembershipsTable,
        eq(organizationMembershipsTable.organizationId, organizationsTable.id),
      )
      .where(eq(organizationMembershipsTable.userId, user.id));

    return organizations.map((org) => ({
      id: org.id,
      name: org.name,
      logo: org.logo,
      branding: {
        logo: org.logo,
        theme: org.theme,
        mode: org.mode,
        color: {
          hue: org.hue,
        },
        rounding: org.rounding,
        font: org.font,
      },
    }));
  } catch (error) {
    console.error("Error fetching user organizations:", error);
    return [];
  }
};
