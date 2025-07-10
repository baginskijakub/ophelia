import { ContentBlock } from "@ophelia/types";
import { Badges, BlockEditor, CompanyLogo, TitleInput } from "./_components";
import { Container } from "@components/*";
import styles from './page.module.css';
import { getOrganization } from "@app/server-actions";
import { Flex, Separator } from "@ophelia/ui";
import { useState } from "react";

export default async function CreateJobPage() {
  const { name, branding } = await getOrganization()
  const { logo } = branding

  const [blocks, setBlocks] = useState<ContentBlock[]>([])

  return (
    <Container className={styles.root}>
      <Flex direction="column" gap={3}> 
        <CompanyLogo src={logo} name={name} />

        <TitleInput />

        <Badges />
      </Flex>

      <Separator />

      <BlockEditor content={blocks} onUpdate={} />
    </Container>
  );
}
