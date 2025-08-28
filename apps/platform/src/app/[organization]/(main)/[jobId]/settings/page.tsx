import { Text, Flex } from "@ophelia/ui";
import { getListingWithApplications } from "@app/data";
import { Metadata } from "next";

interface JobPageProps {
  params: Promise<{
    organization: string;
    jobId: string;
  }>;
}

export const generateMetadata = async (
  props: JobPageProps,
): Promise<Metadata> => {
  const { params } = props;
  const { organization, jobId } = await params;

  const listing = await getListingWithApplications(
    parseInt(jobId),
    organization,
  );

  return {
    title: `Applicants for ${listing.title} | Ophelia`,
    description: `Applicants for ${listing.title} at ${organization}`,
  };
};

export default async function JobPage(props: JobPageProps) {
  const { params } = props;

  return (
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
  );
}
