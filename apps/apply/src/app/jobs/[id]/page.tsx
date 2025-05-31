import { Button, Flex, Icon } from "@ophelia/ui";
import { Body, ApplySection } from "./_components";
import { posting } from "../../../utils";

export default function Page() {
  return (
    <>
      <Flex>
        <span
          style={{
            background: "var(--brand-10)",
            width: "60px",
            height: "60px",
          }}
        />

        <span
          style={{
            background: "var(--brand-30)",
            width: "60px",
            height: "60px",
          }}
        />
        <span
          style={{
            background: "var(--brand-50)",
            width: "60px",
            height: "60px",
          }}
        />
        <span
          style={{
            background: "var(--brand-70)",
            width: "60px",
            height: "60px",
          }}
        />
        <span
          style={{
            background: "var(--brand-80)",
            width: "60px",
            height: "60px",
          }}
        />
        <span
          style={{
            background: "var(--brand-90)",
            width: "60px",
            height: "60px",
          }}
        />
      </Flex>
      <ApplySection />

      <Body />

      <Button size="lg" as="a" href={`/jobs/${posting.title}/apply`}>
        Apply now
        <Icon name="arrow-right" size="md" />
      </Button>
    </>
  );
}
