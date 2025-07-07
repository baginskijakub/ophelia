import { Logo, Text, Flex } from "@ophelia/ui";
import styles from "./page.module.css";
import { Container } from "@components/*";

export default function HomePage() {
  return (
    <Container className={styles.root}>
      <div className={styles["left-column"]}>
        <Flex align="center" gap={1}>
          <Logo />
          <Text role="label" size="md" color="text-70">
            Ophelia
          </Text>
        </Flex>

        <Text role="heading" size="xxl">
          Dream teams
          <br />
          start here
        </Text>

        <Text role="paragraph" size="lg" color="text-30">
          Create beautiful job pages, collect quality applications, and manage
          your entire hiring pipeline in one place.
        </Text>
      </div>
    </Container>
  );
}
