"use client";

import { Organization } from "@ophelia/types";
import {
  BackButton,
  Badges,
  CompanyLogo,
  TitleInput,
  JobDescription,
  useListingForm,
} from "./_components";
import { Container } from "@components/*";
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
      <Container className={styles.root}>
        <Flex direction="column" gap={8}>
          <CompanyLogo src={logo} name={name} />

          <TitleInput />

          <Badges />
        </Flex>
        <Separator />
        <JobDescription />

        <ErrorLabel valid={validation.valid}>{validation.error}</ErrorLabel>

        <Button onClick={onCreate}>Create job posting</Button>
      </Container>

      <BackButton />
    </>
  );
};
