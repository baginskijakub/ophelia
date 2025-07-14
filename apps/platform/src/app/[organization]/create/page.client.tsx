'use client'

import { Organization } from "@ophelia/types";
import { Badges, BlockEditor, CompanyLogo, TitleInput } from "./_components";
import { Container } from "@components/*";
import styles from './page.module.css';
import { Button, Flex, Separator } from "@ophelia/ui";
import { ContentEditorProvider } from "./_components/block-editor/context";
import { useJobPostingForm } from "./_components/job-posting-form";

interface PageClientProps {
  organization: Organization
}

export const PageClient = (props: PageClientProps) => {
  const { organization } = props;
  const { branding, name } = organization;
  const { logo } = branding;

  const { form, setDescription } = useJobPostingForm()

  return (
    <Container className={styles.root}>
      <Flex direction="column" gap={4}>
        <CompanyLogo src={logo} name={name} />

        <TitleInput />

        <Badges />
      </Flex>

      <Separator />

      <ContentEditorProvider blocks={form.description} setBlocks={setDescription} placeholder="Write the job description...">
        <BlockEditor />
      </ContentEditorProvider>

      <Button>
        Create job posting
      </Button>
    </Container>
  );
}
