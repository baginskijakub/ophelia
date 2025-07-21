import { ContentBlock, Flex } from "@ophelia/ui";
import clsx from "clsx";
import { useListing } from "../../context";

export const Body = () => {
  const { listing } = useListing();

  return (
    <Flex direction="column" className={clsx("unfold", "delay-3")} fullWidth>
      {listing.description.map((c, i) => <ContentBlock key={i} block={c} idx={i} />)}
    </Flex>
  );
};
