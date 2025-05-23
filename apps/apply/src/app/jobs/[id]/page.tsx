import { Button, Flex, Separator } from "@ophelia/ui";
import { Header, Body, ApplySection } from "./_components";

export default function Page() {
  return (
    <Flex direction="column" gap={12}>
      <Header />

      <ApplySection />

      <Body />

      <Button size="lg">Apply now</Button>
    </Flex>
  );
}
