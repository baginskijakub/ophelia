import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import styles from "./layout.module.css";

export const DefaultLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <body className={styles.root}>
      <div className={styles.gradient}>
        <div className={styles.layout}>
          {children}
          <Footer />
        </div>
      </div>
    </body>
  );
};
