import { Flex, Markdown, Text } from "@ophelia/ui";
import { posting } from "../../../../../utils";

export const Body = () => {
  return (
    <Flex direction="column">
      <Text role="heading" size="xs">
        About {posting.company.name}
      </Text>

      <Markdown>{posting.about}</Markdown>

      <Markdown>{posting.content}</Markdown>
    </Flex>
  );
};
