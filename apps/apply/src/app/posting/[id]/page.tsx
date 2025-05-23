import { Flex, Separator } from "@ophelia/ui";
import { Header } from "./_components";
import { Body } from "./_components/body";

export default function Page() {
  return (
    <Flex direction="column" gap={12}>
      <Header />

      <Separator orientation="horizontal" />

      <Body />
    </Flex>
  );
}
