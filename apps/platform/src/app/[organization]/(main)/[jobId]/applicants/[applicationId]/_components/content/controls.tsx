import { ApplicationAggregate } from "@ophelia/db";
import { Button, Flex, Icon, Menu, Text } from "@ophelia/ui";
import styles from "./content.module.css";

interface ControlsProps {
  application: ApplicationAggregate;
}

export const Controls = (props: ControlsProps) => {
  const { application } = props;

  const { pipelineStatus } = application;

  if (!pipelineStatus) {
    return null;
  }

  return (
    <Flex gap={2}>
      <Button variant="surface" size="md">
        Resume <Icon name="link" />
      </Button>

      <Menu.Root>
        <Menu.Trigger>
          <Button variant="surface" size="md">
            <div className={styles.buttonContent}>
              <Flex align="center" gap={1}>
                <Text role="paragraph" size="md" color="text-50" as="span">
                  Status:
                </Text>{" "}
                {pipelineStatus.name}
              </Flex>

              <Icon name="chevron-down" />
            </div>
          </Button>
        </Menu.Trigger>

        <Menu.Portal>
          <Menu.Content
            side="bottom"
            align="end"
            sideOffset={8}
            className={styles.menu}
          >
            <Menu.Item>Applied</Menu.Item>
            <Menu.Item>In Review</Menu.Item>
            <Menu.Item>Interview</Menu.Item>
            <Menu.Item>Offer</Menu.Item>
            <Menu.Item>Hired</Menu.Item>
            <Menu.Item>Rejected</Menu.Item>
          </Menu.Content>
        </Menu.Portal>
      </Menu.Root>
    </Flex>
  );
};
