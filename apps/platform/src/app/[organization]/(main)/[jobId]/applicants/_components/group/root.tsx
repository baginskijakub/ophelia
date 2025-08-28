import { PropsWithChildren } from "react";
import { GroupProvider } from "./context";
import styles from "./group.module.css";

export const Root = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <GroupProvider>
      <div className={styles.root}>{children}</div>
    </GroupProvider>
  );
};
