import styles from "./layout.module.css";
import { PropsWithChildren } from "react";
import { Navbar, Footer } from "./_layout";
import { Container } from "@components/*";

interface Props extends PropsWithChildren {
  params: Promise<{ organization: string }>;
}

export default async function ProtectedLayout(props: Props) {
  const { children } = props;
  const { organization } = await props.params;

  return (
    <div className={styles.root}>
      <Navbar currentOrgId={organization} />

      <Container className={styles.inner}>{children}</Container>

      <Footer />
    </div>
  );
}
