import { Button, Flex, Icon, Separator } from "@ophelia/ui";
import { Header, Body, ApplySection } from "./_components";

export default function Page() {
  return (
    <Flex direction="column" gap={12}>
      <Header />

      <ApplySection />

      <Body />

      <Button size="lg">
        Apply now
        <Icon name="arrow-right" size="md" />
      </Button>
    </Flex>
  );
}
