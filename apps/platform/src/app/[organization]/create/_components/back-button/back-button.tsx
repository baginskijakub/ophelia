'use client';

import { Button, Icon } from "@ophelia/ui";
import styles from "./back-button.module.css";

export const BackButton = () => {
  return (
    <Button
      variant="text"
      size="sm"
      className={styles.root}
      onClick={() => window.history.back()}
    >
      <Icon name="chevron-left" size="md" />
      Back to app
    </Button>
  );
}
