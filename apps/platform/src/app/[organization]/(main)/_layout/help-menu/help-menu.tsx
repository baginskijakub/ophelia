import { Text } from "@ophelia/ui";
import styles from "./help-menu.module.css";

export const HelpMenu = () => {
  return (
    <button className={styles.root}>
      <Text size="sm" role="paragraph" color="text-50" as="span">
        ?
      </Text>
    </button>
  );
};
