import { Flex } from "@ophelia/ui";
import { Links } from "../links";
import styles from "./navbar.module.css";
import { UserMenu } from "../user-menu";
import { HelpMenu } from "../help-menu";

export const Navbar = () => {
  return (
    <div className={styles.root}>
      <Links />

      <Flex direction="row" align="center" gap={3}>
        <HelpMenu />

        <UserMenu />
      </Flex>
    </div>
  );
};
