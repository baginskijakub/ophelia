import { Flex, Markdown, Text } from "@ophelia/ui";
import { posting } from "../../../../../utils";
import clsx from "clsx";

export const Body = () => {
  return (
    <Flex direction="column" className={clsx("unfold", "delay-3")}>
      <Text role="heading" size="xs">
        About {posting.company.name}
      </Text>

      <Markdown>{posting.about}</Markdown>

      <Markdown>{posting.content}</Markdown>
    </Flex>
  );
};
