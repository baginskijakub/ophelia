import { Text, Flex } from "@ophelia/ui";
import { getListingWithApplications } from "@app/data";
import { ApplicantList, ApplicantListProvider } from "./_components";
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
  const { organization, jobId } = await params;

  const listing = await getListingWithApplications(
    parseInt(jobId),
    organization,
  );

  return (
    <Flex direction="column" gap={5} fullWidth>
      <Text role="heading" size="xs" color="text-70">
        Applicants
      </Text>

      <ApplicantListProvider
        listing={listing}
        orgName={organization}
        jobId={job}
      >
        <ApplicantList />
      </ApplicantListProvider>
    </Flex>
  );
}
