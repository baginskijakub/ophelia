import { Flex, Separator, Text } from "@ophelia/ui";
import { Links } from "../links";
import styles from "./sidebar.module.css";
import { Organization } from "@ophelia/types";
import { UserMenu } from "../user-menu";
import { HelpMenu } from "../help-menu";

interface Props {
  organization: Organization;
}

export const Sidebar = (props: Props) => {
  const { organization } = props;

  return (
    <div className={styles.root}>
      <Flex direction="column" gap={3}>
        <Text role="label" size="md">
          {organization.name}
        </Text>

        <Separator />

        <Links />
      </Flex>

      <Flex direction="column" gap={3}>
        <HelpMenu />

        <Separator />

        <UserMenu />
      </Flex>
    </div>
  );
};
