'use client'

import { Organization } from "@ophelia/types";
import { BackButton, Badges, CompanyLogo, TitleInput, JobDescription } from "./_components";
import { Container } from "@components/*";
import styles from './page.module.css';
import { Button, Flex, Separator } from "@ophelia/ui";

interface PageClientProps {
  organization: Organization
}

export const PageClient = (props: PageClientProps) => {
  const { organization } = props;
  const { branding, name } = organization;
  const { logo } = branding;

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

        <Button>
          Create job posting
        </Button>
      </Container>

      <BackButton />
    </>
  );
}
