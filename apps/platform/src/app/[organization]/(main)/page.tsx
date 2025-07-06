import { Flex, Text } from "@ophelia/ui";
import { JobPosting } from "./_components";

const Page = async () => {
  const jobPostings = [
    {
      id: "1",
      title: "Software Engineer",
      company: {
        name: "Tech Corp",
        image: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico"
      },
      createdAt: "2023-10-01T12:00:00Z",
      applicantsCount: 5,
      pageViews: 97,
      pipeline: {
        all: 5,
        discarded: 0
      }
    },
    {
      id: "2",
      title: "Product Manager",
      company: {
        name: "Innovate Inc.",
        image: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico"
      },
      createdAt: "2023-10-02T12:00:00Z",
      applicantsCount: 3,
      pageViews: 97,
      pipeline: {
        all: 5,
        discarded: 0
      }
    }
  ];

  return (
    <Flex direction="column" gap={6}>
      <Text role="heading" size="lg" color="text-70">
        Job postings
      </Text>

      <Flex direction="column" gap={4}>
        {jobPostings.map((posting) => (
          <JobPosting key={posting.id} posting={posting} />
        ))}
      </Flex>
    </Flex>
  )
};

export default Page;
