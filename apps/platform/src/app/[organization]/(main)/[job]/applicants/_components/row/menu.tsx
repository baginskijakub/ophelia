import { Flex, Icon, Menu } from "@ophelia/ui";
import styles from "./row.module.css";
import { useApplicantList } from "../applicant-list";
import { useApplicant } from "./context";
import {
  updateApplicantPipelineStatus,
  discardApplicant,
} from "@app/server-actions";
import { useTransition } from "react";

export const ApplicantMenu = () => {
  const { listing, orgName, jobId } = useApplicantList();
  const { pipeline } = listing;
  const { application } = useApplicant();
  const { pipelineStatus } = application;
  const { steps } = pipeline;
  const [isPending, startTransition] = useTransition();

  const handlePipelineStatusChange = (statusOrder: number) => {
    // TODO: handle erros using toasts or whatever
    startTransition(async () => {
      const success = await updateApplicantPipelineStatus(
        application.id,
        statusOrder,
        orgName,
        jobId,
      );
    });
  };

  const handleDiscard = () => {
    startTransition(async () => {
      const success = await discardApplicant(application.id, orgName, jobId);
    });
  };

  return (
    <Menu.Root>
      <Menu.Trigger className={styles.menuTrigger} disabled={isPending}>
        <Icon name="elipsis" color="icon-60" />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Content
          side="left"
          align="start"
          sideOffset={8}
          className={styles.menuContent}
        >
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
                Change pipeline status
              </Menu.SubTrigger>

              <Menu.Portal>
                <Menu.SubContent
                  side="left"
                  align="start"
                  className={styles.menuContent}
                >
                  {steps.map((stage) => (
                    <Menu.Item
                      key={stage.order}
                      className={styles.subMenuItem}
                      onClick={() => handlePipelineStatusChange(stage.order)}
                    >
                      {stage.name}
                      <Icon
                        name={
                          pipelineStatus.order === stage.order
                            ? "check"
                            : "forward"
                        }
                        size="md"
                        color="icon-60"
                      />
                    </Menu.Item>
                  ))}
                </Menu.SubContent>
              </Menu.Portal>
            </Menu.Sub>

            <Menu.Item onClick={handleDiscard}>
              <Icon name="trash" size="md" color="icon-60" />
              Discard
            </Menu.Item>
          </Flex>
        </Menu.Content>
      </Menu.Portal>
    </Menu.Root>
  );
};
