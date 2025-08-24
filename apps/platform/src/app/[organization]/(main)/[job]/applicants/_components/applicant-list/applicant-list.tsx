"use client";

import { ApplicantProvider } from "../row";
import { Row } from "../row";
import { Flex, Separator } from "@ophelia/ui";
import styles from "./applicant-list.module.css";
import { Group } from "../group";
import { useApplicantList } from "./context";
import { Placeholder } from "../../../_components/applicants/placeholder";

export const ApplicantList = () => {
  const { groupedApplications } = useApplicantList();

  return (
    <Flex direction="column" gap={4} fullWidth>
      {groupedApplications.length === 0 && <Placeholder />}

      {groupedApplications.map((group) => (
        <div className={styles.applications} key={group.name}>
          <Group.Root>
            <Group.Head name={group.name} count={group.applications.length} />

            <Group.Content>
              {group.applications.map((application, index) => (
                <ApplicantProvider
                  application={application}
                  key={application.id}
                >
                  <Row />

                  {index < group.applications.length - 1 && <Separator />}
                </ApplicantProvider>
              ))}
            </Group.Content>
          </Group.Root>
        </div>
      ))}
    </Flex>
  );
};
