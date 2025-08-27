import { Text, Flex, Icon, Button } from "@ophelia/ui";
import { getListingWithApplications } from "@app/server-actions";
import { Backlink } from "@components/*";
import { ReactNode } from "react";
import { JobTabs } from "./_components/job-tabs";

interface JobLayoutProps {
  children: ReactNode;
  params: Promise<{
    organization: string;
    job: string;
  }>;
}

export default async function JobLayout({ children, params }: JobLayoutProps) {
  const { organization, job } = await params;

  const listing = await getListingWithApplications(parseInt(job), organization);
  const { title } = listing;
  const basePath = `/${organization}/${job}`;

  const jobPageUrl = `${process.env.APPLY_URL?.replace("://", `://${organization}.`)}/jobs/${job}`;

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

          <Button
            variant="surface"
            size="md"
            as="a"
            href={jobPageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Job page
            <Icon name="external-link" size="md" color="icon-60" />
          </Button>
        </Flex>

        <JobTabs basePath={basePath} />
      </Flex>

      {children}
    </Flex>
  );
}
