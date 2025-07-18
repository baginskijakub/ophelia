import { Flex, Text } from "@ophelia/ui";
import { Listing } from "./_components";
import { getListings } from "@app/server-actions";

interface PageProps {
  params: Promise<{
    organization: string;
  }>;
}

const Page = async (page: PageProps) => {
  const { params } = page;
  const { organization } = await params;

  const listings = await getListings(organization);

  return (
    <Flex direction="column" gap={6}>
      <Text role="heading" size="lg" color="text-70">
        Job postings
      </Text>

      <Flex direction="column" gap={4}>
        {listings.map((listing) => (
          <Listing key={listing.id} listing={listing} />
        ))}
      </Flex>
    </Flex>
  )
};

export default Page;
