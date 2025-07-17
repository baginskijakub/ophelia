import { Flex, Logo } from "@ophelia/ui";
import { Links } from "../links";
import styles from "./navbar.module.css";
import { UserMenu } from "../user-menu";
import { SettingsMenu } from "../settings-menu";
import { Search } from "../search";

interface NavbarProps {
  currentOrgId?: string;
}

export const Navbar = ({ currentOrgId }: NavbarProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.side}>
        <Logo size="lg" />
      </div>

      <Links />

      <Flex
        className={styles.side}
        direction="row"
        align="center"
        justify="flex-end"
        gap={3}
      >
        <Search />

        <SettingsMenu />

        <UserMenu currentOrgId={currentOrgId} />
      </Flex>
    </div>
  );
};
