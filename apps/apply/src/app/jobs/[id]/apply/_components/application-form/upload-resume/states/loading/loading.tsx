import { LoadingSpinner } from "@ophelia/ui";
import styles from "./loading.module.css";
import { Label } from "./label";

export const Loading = () => {
  return (
    <div className={styles["root"]}>
      <LoadingSpinner size="sm" />
      <Label />
    </div>
  );
};
