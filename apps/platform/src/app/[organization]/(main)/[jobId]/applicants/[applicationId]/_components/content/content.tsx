import { Flex, Separator, Text } from "@ophelia/ui";
import { Requirements } from "./requirements";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { ApplicationAggregate } from "@ophelia/db/dist/crud";

interface ContentProps {
  application: ApplicationAggregate;
}

export const Content = (props: ContentProps) => {
  const { application } = props;

  return (
    <Flex direction="column" gap={8} fullWidth>
      <Flex direction="column" gap={6} fullWidth>
        <Text role="heading" size="sm">
          Summary
        </Text>

        <Text role="paragraph" size="md" color="text-50">
          {application.aiSummary}
        </Text>

        <Requirements
          requirementsMet={application.requirementsMet}
          requirementsNotMet={application.requirementsNotMet}
        />
      </Flex>

      <Separator />

      <Flex direction="column" gap={4} fullWidth>
        <Text role="heading" size="sm">
          About
        </Text>

        <Text role="paragraph" size="md" color="text-50">
          {application.ocrSummary}
        </Text>
      </Flex>

      <Separator />

      <Experience workExperience={application.workExperience} />

      <Separator />

      <Projects projects={application.projects} />
    </Flex>
  );
};
