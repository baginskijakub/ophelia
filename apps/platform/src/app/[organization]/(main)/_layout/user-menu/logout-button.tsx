"use client";

import { handleSignOut } from "@app/server-actions";
import { Button } from "@ophelia/ui";

export const LogoutButton = () => {
  return (
    <Button variant="surface" fullWidth onClick={handleSignOut}>
      Sign out
    </Button>
  );
};
