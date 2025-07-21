"use server";

import { withAuth } from "@workos-inc/authkit-nextjs";
import { db } from "@ophelia/db";
import { notFound } from "next/navigation";

export const getUserOrganizations = async () => {
  const { user } = await withAuth();

  if (!user) {
    return notFound();
  }

  const { data, error } = await db.organizations.getByUserId(user.id);

  if (error || !data) {
    return notFound();
  }

  return data;
};
