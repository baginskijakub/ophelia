import { Flex, Icon, Text, Avatar } from "@ophelia/ui";
import { getUser } from "@app/server-actions";
import styles from "./user-menu.module.css";

export const UserMenu = async () => {
  const { abbreviation, name, image } = await getUser();

  return (
    <button className={styles.button}>
      <Avatar.Root size="md">
        {image ? (
          <Avatar.Image src={image} alt="User avatar" />
        ) : (
          <Avatar.Fallback>{abbreviation}</Avatar.Fallback>
        )}
      </Avatar.Root>
    </button>
  );
};
