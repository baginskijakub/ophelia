"use client";

import { ApplicantProvider } from "../row";
import { Row } from "../row";
import { Separator } from "@ophelia/ui";
import styles from "./applicant-list.module.css";
import { Group } from "../group";
import { useApplicantList } from "./context";

export const ApplicantList = () => {
  const { groupedApplications } = useApplicantList();

  return (
    <div>
      <div className={styles.applications}>
        {groupedApplications.map((group, groupIndex) => (
          <Group.Root key={group.name}>
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

            {groupIndex < groupedApplications.length - 1 && <Separator />}
          </Group.Root>
        ))}
      </div>
    </div>
  );
};
