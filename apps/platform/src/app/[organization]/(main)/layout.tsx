import styles from "./layout.module.css";
import { PropsWithChildren } from "react";
import { Navbar } from "./_layout";
import {Footer} from "./_layout/footer";

interface Props extends PropsWithChildren {
  params: Promise<{ organization: string }>;
}

export default async function ProtectedLayout(props: Props) {
  const { children } = props;

  return (
    <div className={styles.root}>
      <Navbar />

      <div className={styles.content}>
        <div className={styles.inner}>{children}</div>
      </div>

        <Footer />
    </div>
  );
}
