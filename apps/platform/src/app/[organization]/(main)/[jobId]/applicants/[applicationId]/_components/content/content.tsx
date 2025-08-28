import { Application } from "@ophelia/types";
import { Flex, Text } from "@ophelia/ui";

interface ContentProps {
  application: Application;
}

export const Content = (props: ContentProps) => {
  const { application } = props;

  return (
    <Flex direction="column" gap={4} fullWidth>
      <Text role="heading" size="md">
        About
      </Text>

      <Text role="paragraph" size="md" color="text-50">
        {application.ocrSummary}
      </Text>
    </Flex>
  );
};
