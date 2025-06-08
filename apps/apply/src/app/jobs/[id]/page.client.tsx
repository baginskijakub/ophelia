"use client";

import { Button, Flex, Icon, useDisclosure } from "@ophelia/ui";
import { ApplySection, Body, Form } from "./_components";
import { useListing } from "./context";

export const PageClient = () => {
  const { posting } = useListing();
  const disclosure = useDisclosure();

  return (
    <>
      <Flex gap={6}>
        <Flex direction="column" gap={5}>
          <ApplySection />

          <Body />

          <Button size="lg" onClick={disclosure.onOpen}>
            Apply now
            <Icon name="arrow-right" size="md" />
          </Button>
        </Flex>
      </Flex>

      <Form {...disclosure} />
    </>
  );
};
