import { Button, Icon } from "@ophelia/ui";
import { Body, ApplySection } from "./_components";
import { getListing } from "../../../server-actions";

export default async function Page() {
  const { posting } = await getListing();

  return (
    <>
      <ApplySection />

      <Body />

      <Button size="lg" as="a" href={`/jobs/${posting.id}/apply`}>
        Apply now
        <Icon name="arrow-right" size="md" />
      </Button>
    </>
  );
}
