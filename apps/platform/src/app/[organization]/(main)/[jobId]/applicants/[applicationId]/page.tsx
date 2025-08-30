import { Backlink } from "@components/*";
import { getApplication } from "../../../../../../data/get-application";
import { Content } from "./_components";
import { Avatar, Flex, Text } from "@ophelia/ui";

interface PageProps {
  params: Promise<{
    organization: string;
    jobId: string;
    applicationId: string;
  }>;
}

export default async function Page(props: PageProps) {
  const { organization, jobId, applicationId } = await props.params;

  const application = await getApplication(
    parseInt(applicationId),
    parseInt(jobId),
    organization,
  );

  const abbreviation = `${application.firstName.charAt(0)}${application.lastName.charAt(0)}`;

  return (
    <Flex direction="column" gap={12} fullWidth>
      <Flex direction="column" gap={3}>
        <Backlink href={`/${organization}/${jobId}/applicants`}>
          Applicants
        </Backlink>

        <Flex gap={3} align="center">
          <Avatar.Root size="xl">
            {application.image ? (
              <Avatar.Image
                src={application.image}
                alt={`${application.firstName} ${application.lastName}`}
              />
            ) : (
              <Avatar.Fallback>{abbreviation}</Avatar.Fallback>
            )}
          </Avatar.Root>

          <Text role="heading" size="lg" color="text-70">
            {application.firstName} {application.lastName}
          </Text>
        </Flex>
      </Flex>

      <Content application={application} />
    </Flex>
  );
}
