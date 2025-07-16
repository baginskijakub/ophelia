import { Flex, Text } from "@ophelia/ui";
import { JobPosting } from "./_components";
import { getJobPostings } from "@app/server-actions";

interface PageProps {
  params: Promise<{
    organization: string;
  }>;
}

const Page = async (page: PageProps) => {
  const { params } = page;
  const { organization } = await params;

  const jobPostings = await getJobPostings(organization);

  return (
    <Flex direction="column" gap={6}>
      <Text role="heading" size="lg" color="text-70">
        Job postings
      </Text>

      <Flex direction="column" gap={4}>
        {jobPostings.map((posting) => (
          <JobPosting key={posting.id} posting={posting} orgId={organization} />
        ))}
      </Flex>
    </Flex>
  )
};

export default Page;
