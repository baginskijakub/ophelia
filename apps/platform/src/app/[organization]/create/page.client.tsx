"use client";

import { Organization } from "@ophelia/types";
import {
  BackButton,
  CompanyLogo,
  TitleInput,
  JobDescription,
  useListingForm,
} from "./_components";
import styles from "./page.module.css";
import { Button, ErrorLabel, Flex, Separator } from "@ophelia/ui";

interface PageClientProps {
  organization: Organization;
}

export const PageClient = (props: PageClientProps) => {
  const { organization } = props;
  const { name, logo } = organization;
  const { validation, onCreate } = useListingForm();

  return (
    <>
      <div className={styles.root}>
        <Flex direction="column" gap={8}>
          <CompanyLogo src={logo} name={name} />

          <TitleInput />
        </Flex>
        <Separator />
        <JobDescription />

        <ErrorLabel valid={validation.valid}>{validation.error}</ErrorLabel>

        <Button onClick={onCreate}>Create job posting</Button>
      </div>

      <BackButton />
    </>
  );
};
