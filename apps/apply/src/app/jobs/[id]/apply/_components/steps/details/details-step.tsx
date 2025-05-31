import { Field, Flex, Input, Text } from "@ophelia/ui";
import styles from "./details-step.module.css";

export const DetailsStep = () => {
  return (
    <Flex direction="column" gap={8}>
      <Flex direction="column" gap={2} align="center">
        <Text role="heading" size="sm" align="center">
          We've extracted information from your resume. <br />
        </Text>

        <Text role="paragraph" size="md" align="center" color="text-70">
          Please make sure the information we extracted is correct.
        </Text>
      </Flex>

      <Field.Root>
        <Flex justify="space-between" fullWidth>
          <Field.Label>First name</Field.Label>

          <span>Filled from resume</span>
        </Flex>
        <Input id="name" size="lg" />
      </Field.Root>

      <Field.Root>
        <Flex justify="space-between" fullWidth>
          <Field.Label>First name</Field.Label>
          <span>Filled from resume</span>
        </Flex>
        <Input id="name" size="lg" />
      </Field.Root>
    </Flex>
  );
};
