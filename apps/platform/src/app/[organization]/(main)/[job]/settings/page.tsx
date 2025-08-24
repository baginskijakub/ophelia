import { Text, Flex, Icon, Tabs, Button } from "@ophelia/ui";
import { getListingWithApplications } from "@app/server-actions";
import { Backlink } from "@components/*";
import { Metadata } from "next";

interface JobPageProps {
  params: Promise<{
    organization: string;
    job: string;
  }>;
}

export const generateMetadata = async (
  props: JobPageProps,
): Promise<Metadata> => {
  const { params } = props;
  const { organization, job } = await params;

  const listing = await getListingWithApplications(parseInt(job), organization);

  return {
    title: `Applicants for ${listing.title} | Ophelia`,
    description: `Applicants for ${listing.title} at ${organization}`,
  };
};

export default async function JobPage(props: JobPageProps) {
  const { params } = props;
  const { organization, job } = await params;

  const listing = await getListingWithApplications(parseInt(job), organization);

  const { title } = listing;

  const basePath = `/${organization}/${job}`;

  return (
    <Flex direction="column" gap={16} fullWidth>
      <Flex direction="column" gap={8} fullWidth>
        <Flex fullWidth justify="space-between" align="center">
          <Flex direction="column" gap={2}>
            <Backlink href={`/${organization}`}>Job postings</Backlink>

            <Text role="heading" size="lg" color="text-70">
              {title}
            </Text>
          </Flex>

          <Button variant="surface" size="md">
            Job page
            <Icon name="external-link" size="md" color="icon-60" />
          </Button>
        </Flex>

        <Tabs.Root>
          <Tabs.Item as="a" href={basePath}>
            Overview
          </Tabs.Item>
          <Tabs.Item as="a" href={`${basePath}/applicants`}>
            Applicants
          </Tabs.Item>
          <Tabs.Item as="a" active href={`${basePath}/settings`}>
            Settings
          </Tabs.Item>
        </Tabs.Root>
      </Flex>

      <Flex direction="column" gap={8} fullWidth>
        <Text role="heading" size="xs" color="text-70">
          Pipeline
        </Text>

        <Text role="heading" size="xs" color="text-70">
          Description
        </Text>

        <Text role="heading" size="xs" color="text-70">
          Badges
        </Text>
      </Flex>
    </Flex>
  );
}
