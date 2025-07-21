import { Flex, Icon, Menu } from "@ophelia/ui";
import styles from "./row.module.css";

export const ApplicantMenu = () => {
  return (
    <Menu.Root>
      <Menu.Trigger className={styles.menuTrigger}>
        <Icon name="elipsis" color="icon-60" />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Content side="left" align="start" sideOffset={8}>
          <Flex direction="column">
            <Menu.Item>
              <Icon name="chevron-right" size="md" color="icon-60" />
              View
            </Menu.Item>

            <Menu.Item>
              <Icon name="eye" size="md" color="icon-60" />
              Quick look
            </Menu.Item>

            <Menu.Sub>
              <Menu.SubTrigger>
                <Icon name="pipeline" size="md" color="icon-60" />
                Pipeline status
              </Menu.SubTrigger>

              <Menu.Portal>
                <Menu.SubContent side="left" align="start">
                  <Menu.Item>
                    <Icon name="check" size="md" color="icon-60" />
                    Move to stage
                  </Menu.Item>
                  <Menu.Item>
                    <Icon name="chevron-right" size="md" color="icon-60" />
                    Reject
                  </Menu.Item>
                </Menu.SubContent>
              </Menu.Portal>
            </Menu.Sub>
          </Flex>
        </Menu.Content>
      </Menu.Portal>
    </Menu.Root>
  );
};
