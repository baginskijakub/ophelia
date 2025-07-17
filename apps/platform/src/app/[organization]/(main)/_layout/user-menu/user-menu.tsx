import { Text, Avatar, Menu } from "@ophelia/ui";
import { getUser, getUserOrganizations } from "@app/server-actions";
import Link from "next/link";
import { ChevronDown, Building2 } from "lucide-react";
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
          <Avatar.Root size="md">
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
          <Text role="label" size="sm" color="text-70">
            {email}
          </Text>
        </div>
        <Menu.Separator />
        {organizations.length > 0 && (
          <>
            <Menu.Label className={styles.label}>Organizations</Menu.Label>
            <div className={styles.orgList}>
              {organizations.map((org) => {
                const isCurrentOrg = org.id === currentOrgId;
                return (
                  <Menu.Item key={org.id} asChild>
                    <Link
                      href={`/${org.id}`}
                      className={`${styles.orgItem} ${isCurrentOrg ? styles.currentOrg : ""}`}
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
                      <Text role="label" size="sm">
                        {org.name}
                      </Text>
                      {isCurrentOrg && (
                        <div className={styles.currentIndicator}>•</div>
                      )}
                    </Link>
                  </Menu.Item>
                );
              })}
            </div>
            <Menu.Separator />
          </>
        )}
        <Menu.Item>
          <LogoutButton />
        </Menu.Item>{" "}
      </Menu.Content>
    </Menu.Root>
  );
};
