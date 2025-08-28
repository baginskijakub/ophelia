import { Button, Flex, Icon, Text } from "@ophelia/ui";
import styles from "./placeholder.module.css";
import { Visual } from "./visual";

interface PlaceholderProps {
  orgName: string;
}

export const Placeholder = (props: PlaceholderProps) => {
  const { orgName } = props;

  return (
    <Flex direction="column" gap={6} className={styles.root}>
      <Visual />

      <Flex direction="column" gap={3}>
        <Text role="label" color="text-70" size="lg">
          You don’t have any job postings yet
        </Text>

        <Flex direction="column" gap={2}>
          <Text role="paragraph" color="text-50" size="md">
            Create custom job posting to collect applications for your openings.
          </Text>

          <Text role="paragraph" color="text-50" size="md">
            You can share a link to job posting on your social media and
            applicants will be able to easily share their resume and other
            information with you.
          </Text>
        </Flex>
      </Flex>

      <Button variant="subtle" as="a" href={`/${orgName}/create`}>
        Create job posting
        <Icon name="plus" color="icon-60" />
      </Button>
    </Flex>
  );
};
