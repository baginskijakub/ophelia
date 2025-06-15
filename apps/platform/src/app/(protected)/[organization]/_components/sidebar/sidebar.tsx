import { Flex, Separator, Text } from "@ophelia/ui";
import { Links } from "../links";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.root}>
      <Flex direction="column" gap={3}>
        <Text role="label" size="md">
          Acme Inc
        </Text>

        <Separator />

        <Links />
      </Flex>

      <Separator />
    </div>
  );
};
