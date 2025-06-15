import { Flex, Icon, Text, Avatar } from "@ophelia/ui";
import { getUser } from "@app/server-actions";
import styles from "./user-menu.module.css";

export const UserMenu = async () => {
  const { firstName } = await getUser();

  return (
    <button className={styles.button}>
      <Flex>
        <Avatar.Root size="md">
          <Avatar.Fallback>JB</Avatar.Fallback>
        </Avatar.Root>
        <Text role="label" size="md" color="text-70">
          {firstName}
        </Text>
      </Flex>

      <Icon name="chevron-up-down" color="icon-30" size="md" />
    </button>
  );
};
