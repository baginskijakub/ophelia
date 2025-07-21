import { Text, Flex, Icon, Tabs, Button } from "@ophelia/ui";
import { getListingWithApplications } from "@app/server-actions";
import { Backlink } from "@components/*";
import { ApplicantList, ApplicantListProvider } from "./_components";

interface JobPageProps {
  params: Promise<{
    organization: string;
    job: string;
  }>;
}

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
            <Backlink href="/jobs">Job postings</Backlink>

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
          <Tabs.Item as="a" active href={`${basePath}/applicants`}>
            Applicants
          </Tabs.Item>
          <Tabs.Item as="a" href={`${basePath}/settings`}>
            Settings
          </Tabs.Item>
        </Tabs.Root>
      </Flex>

      <Text role="heading" size="xs" color="text-70">
        Applicants
      </Text>

      <ApplicantListProvider applications={listing.applications}>
        <ApplicantList />
      </ApplicantListProvider>
    </Flex>
  );
}
