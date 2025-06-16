import { Icon } from "@ophelia/ui";
import styles from "./settings-menu.module.css";

export const SettingsMenu = () => {
  return (
    <button className={styles.root}>
      <Icon name="settings" size="md" color="icon-60" />
    </button>
  );
};
