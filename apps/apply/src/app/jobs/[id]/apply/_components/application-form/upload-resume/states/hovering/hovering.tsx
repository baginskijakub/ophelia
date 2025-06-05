import { Text } from "@ophelia/ui";
import styles from "./hovering.module.css";

export const Hovering = () => {
  return (
    <div className={styles["root"]}>
      <Text role="label" size="lg" color="brand">
        Drop your resume here
      </Text>
    </div>
  );
};
