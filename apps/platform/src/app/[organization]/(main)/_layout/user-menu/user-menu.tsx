import { Text, Avatar, Menu, Flex, Separator } from "@ophelia/ui";
import { getUser, getUserOrganizations } from "@app/server-actions";
import Link from "next/link";
import { ChevronDown, Building2 } from "lucide-react";
import styles from "./user-menu.module.css";
import { LogoutButton } from "./logout-button";

interface UserMenuProps {
  currentOrgId?: string;
}

export const UserMenu = async ({ currentOrgId }: UserMenuProps) => {
  const { abbreviation, name, image, email } = await getUser();
  const organizations = await getUserOrganizations();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <button className={styles.button}>
          <Avatar.Root size="sm">
            {image ? (
              <Avatar.Image src={image} alt="User avatar" />
            ) : (
              <Avatar.Fallback>{abbreviation}</Avatar.Fallback>
            )}
          </Avatar.Root>

          <ChevronDown size={14} />
        </button>
      </Menu.Trigger>

      <Menu.Content className={styles.content} align="end" sideOffset={8}>
        <div className={styles.userInfo}>
          <Text role="label" size="md">
            {name}
          </Text>

          <Text role="paragraph" size="sm" color="text-50">
            {email}
          </Text>
        </div>

        <Separator />


        <Flex direction="column" >
          <Menu.Label className={styles.label}>
            <Text role="label" size="sm" color="text-50">
              Organizations
            </Text>
          </Menu.Label>

          {organizations.map((org) =>
            <Menu.Item key={org.id} asChild>
              <Link
                href={`/${org.id}`}
              >
                <div className={styles.orgIcon}>
                  {org.logo ? (
                    <img
                      src={org.logo}
                      alt=""
                      className={styles.orgLogo}
                    />
                  ) : (
                    <Building2
                      size={16}
                      className={styles.orgPlaceholder}
                    />
                  )}
                </div>

                {org.name}
              </Link>
            </Menu.Item>
          )}
        </Flex>

        <LogoutButton />
      </Menu.Content>
    </Menu.Root>
  );
};
