import styles from "./applicants.module.css";
import { Flex, Text, Icon, Separator } from "@ophelia/ui";
import { Row } from "./row";
import React from "react";
import { ListingWithApplications } from "@ophelia/types";

interface Props {
  applications: ListingWithApplications["applications"];
}

export const Applicants = (props: Props) => {
  const { applications } = props;

  return (
    <Flex direction="column" gap={4} fullWidth>
      <Text role="heading" size="xs" color="text-70">Applicants</Text>

      <div className={styles.root}>
        {applications.map((applicant, index) =>
          <React.Fragment key={index}>
            <Row key={index} applicant={applicant} />
            {index < applications.length - 1 && <Separator />}
          </React.Fragment>
        )}

        <Separator />

        <a className={styles.footer}>
          <Text role="paragraph" as='span' size="sm" color="text-70">
            View all {applications.length} applicants
          </Text>

          <Icon name="chevron-right" size="md" color="icon-60"/>
        </a>
      </div>
    </Flex>
  );
}
