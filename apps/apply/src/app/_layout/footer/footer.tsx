import { Logo, Text, Flex, Separator } from "@ophelia/ui";
import styles from "./footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <Separator orientation="horizontal" />

      <Flex align="center" gap={1}>
        <Text role="paragraph" size="sm" color="text-50">
          powered by
        </Text>

        <Flex align="center" gap={0.5}>
          <Logo size="md" />

          <Text role="label" size="md">
            Ophelia
          </Text>
        </Flex>
      </Flex>
    </footer>
  );
};
