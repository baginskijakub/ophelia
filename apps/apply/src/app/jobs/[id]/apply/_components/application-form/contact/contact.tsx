import { Field, Flex, Input } from "@ophelia/ui";

export const Contact = () => {
  return (
    <Flex direction="column" gap={5} fullWidth>
      <Field.Root fullWidth>
        <Field.Label>
          Full name
          <Field.Required />
        </Field.Label>

        <Input size="lg" />
      </Field.Root>
    </Flex>
  );
};
