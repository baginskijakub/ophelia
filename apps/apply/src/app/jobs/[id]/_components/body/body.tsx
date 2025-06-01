import { Flex, Markdown, Text } from "@ophelia/ui";
import clsx from "clsx";
import { getListing } from "../../../../../server-actions";

export const Body = async () => {
  const { posting } = await getListing();

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
