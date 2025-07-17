"use client";

import { Text } from "@ophelia/ui";
import styles from "./user-menu.module.css";
import { LogOut } from "lucide-react";
import { handleSignOut } from "@app/server-actions";

export const LogoutButton = () => {

  return (
    <button type="button" className={styles.logoutItem} onClick={async () => await handleSignOut()}>
      <LogOut size={14} />
      <Text role="label" size="sm">
        Sign out
      </Text>
    </button>
  );
};

