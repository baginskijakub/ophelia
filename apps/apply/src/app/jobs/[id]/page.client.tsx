"use client";

import { Button, Flex, Icon, useDisclosure } from "@ophelia/ui";
import { ApplySection, Body, Form, FormProvider } from "./_components";

export const PageClient = () => {
  const disclosure = useDisclosure();

  return (
    <>
      <Flex gap={6} fullWidth>
        <Flex direction="column" gap={12} fullWidth>
          <ApplySection onApply={disclosure.onOpen} />

          <Body />

          <Button size="lg" onClick={disclosure.onOpen}>
            Apply now
            <Icon name="arrow-right" size="md" />
          </Button>
        </Flex>
      </Flex>

      <FormProvider>
        <Form {...disclosure} />
      </FormProvider>
    </>
  );
};
