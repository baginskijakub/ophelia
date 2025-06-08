import { Flex, Markdown, Text } from "@ophelia/ui";
import clsx from "clsx";
import { useListing } from "../../context";

export const Body = () => {
  const { posting } = useListing();

  return (
    <Flex direction="column" className={clsx("unfold", "delay-3")}>
      <Flex direction="column" gap={5}>
        <Text role="heading" size="xs">
          About {posting.company.name}
        </Text>

        <Markdown>{posting.about}</Markdown>
      </Flex>

      <Markdown>{posting.content}</Markdown>
    </Flex>
  );
};
