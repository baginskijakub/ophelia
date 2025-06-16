import { Icon } from "@ophelia/ui";
import styles from "./search.module.css";

export const Search = () => {
  return (
    <button className={styles.root}>
      <Icon name="search" size="md" color="icon-60" />
    </button>
  );
};
