import { Button, Flex, Logo } from "@ophelia/ui";
import { Links } from "../links";
import styles from "./navbar.module.css";
import { UserMenu } from "../user-menu";

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
        <Button variant="text" as={"a"} href={`/${currentOrgId}/create`}>
          Create job posting
        </Button>

        <UserMenu currentOrgId={currentOrgId} />
      </Flex>
    </div>
  );
};
