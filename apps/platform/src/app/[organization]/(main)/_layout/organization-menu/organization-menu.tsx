import { getOrganization } from "@app/server-actions";
import styles from "./organization-menu.module.css";
import { Flex, Icon, Text } from "@ophelia/ui";

export const OrganizationMenu = async () => {
  const organization = await getOrganization();

  return (
    <button className={styles.root}>
      <Flex gap={1} align="center">
        <Icon name="cube" color="icon-30" size="sm" />

        <Text role="paragraph" size="sm">
          {organization.name}
        </Text>
      </Flex>

      <Icon name="chevron-up-down" color="icon-60" size="sm" />
    </button>
  );
};
