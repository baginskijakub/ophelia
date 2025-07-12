'use client'

import { Organization } from "@ophelia/types";
import { Badges, BlockEditor, CompanyLogo, TitleInput } from "./_components";
import { Container } from "@components/*";
import styles from './page.module.css';
import { Flex, Separator } from "@ophelia/ui";
import { ContentEditorProvider } from "./_components/block-editor/context";

interface PageClientProps {
  organization: Organization
}

export const PageClient = (props: PageClientProps) => {
  const { organization } = props;
  const { branding, name } = organization;
  const { logo } = branding;

  return (
    <Container className={styles.root}>
      <Flex direction="column" gap={3}>
        <CompanyLogo src={logo} name={name} />

        <TitleInput />

        <Badges />
      </Flex>

      <Separator />

      <ContentEditorProvider>
        <BlockEditor />
      </ContentEditorProvider>
    </Container>
  );
}
