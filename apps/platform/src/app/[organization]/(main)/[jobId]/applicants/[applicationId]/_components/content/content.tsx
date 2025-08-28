import { Application } from "@ophelia/types";
import { Flex } from "@ophelia/ui";

interface ContentProps {
  application: Application;
}

export const Content = (props: ContentProps) => {
  const { application } = props;

  return <Flex>Content</Flex>;
};
