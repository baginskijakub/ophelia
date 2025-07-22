import { Flex } from "@ophelia/ui";
import { Navlink } from "./navlink";

export const Links = () => {
  return (
    <Flex direction="row" gap={4}>
      <Navlink href="/jobs" data-active>
        Job postings
      </Navlink>

      <Navlink href="/candidates">Branding</Navlink>
    </Flex>
  );
};
