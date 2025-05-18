import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import styles from "./layout.module.css";

export const DefaultLayout: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <body className={styles.root}>
      {children}
      <Footer />
    </body>
  );
};
