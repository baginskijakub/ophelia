"use server";

import { signOut } from "@workos-inc/authkit-nextjs";

export const handleSignOut = async () => {
  await signOut();
};
