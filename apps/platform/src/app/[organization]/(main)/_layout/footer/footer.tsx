import { Flex, FullLogo, Separator } from "@ophelia/ui";
import { FooterLinks } from "../links";
import styles from "./footer.module.css";
import { Container } from "@components/*";

export const Footer = () => {
  return (
    <Container className={styles.root}>
      <Separator orientation="horizontal" />

      <div className={styles.inner}>
        <div className={styles.side}>
          <FullLogo size="md" />
        </div>

        <Flex className={styles.side}>
          <FooterLinks />
        </Flex>
      </div>
    </Container>
  );
};
