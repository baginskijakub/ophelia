import { Flex, Logo } from "@ophelia/ui";
import { Links } from "../links";
import styles from "./navbar.module.css";
import { UserMenu } from "../user-menu";
import { SettingsMenu } from "../settings-menu";
import { Search } from "../search";
import { OrganizationMenu } from "../organization-menu";

export const Navbar = () => {
  return (
    <div className={styles.root}>
      <Flex direction="row" align="center" gap={5}>
        <Logo size="lg" />

        <Links />
      </Flex>

      <Flex direction="row" align="center" gap={3}>
        <Search />

        <SettingsMenu />

        <OrganizationMenu />

        <UserMenu />
      </Flex>
    </div>
  );
};
