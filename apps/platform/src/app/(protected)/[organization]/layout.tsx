import { Sidebar } from "./_components";
import styles from "./layout.module.css";
import { PropsWithChildren } from "react";

export default async function ProtectedLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <div className={styles.root}>
      <Sidebar />

      <div className={styles.content}>{children}</div>
    </div>
  );
}
