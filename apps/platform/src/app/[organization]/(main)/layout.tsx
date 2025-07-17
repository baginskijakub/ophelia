import styles from "./layout.module.css";
import { PropsWithChildren } from "react";
import { Navbar } from "./_layout";
import { Container } from "@components/*";
import { Footer } from "./_layout/footer";

interface Props extends PropsWithChildren {
  params: Promise<{ organization: string }>;
}

export default async function ProtectedLayout(props: Props) {
  const { children } = props;
  const { organization } = await props.params;

  return (
    <div className={styles.root}>
      <Navbar currentOrgId={organization} />

      <div className={styles.content}>
        <Container className={styles.inner}>{children}</Container>
      </div>

      <Footer />
    </div>
  );
}
