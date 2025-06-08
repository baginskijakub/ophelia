import { Field, Flex, Input, Text } from "@ophelia/ui";

export const Contact = () => {
  return (
    <Flex direction="column" gap={5} fullWidth>
      <Text role="label" size="xl">
        Contact information
      </Text>

      <Flex gap={5} fullWidth>
        <Field.Root fullWidth>
          <Field.Label>
            First name
            <Field.Required />
          </Field.Label>

          <Input size="lg" />
        </Field.Root>

        <Field.Root fullWidth>
          <Field.Label>
            Last name
            <Field.Required />
          </Field.Label>

          <Input size="lg" />
        </Field.Root>
      </Flex>

      <Flex gap={5} fullWidth>
        <Field.Root fullWidth>
          <Field.Label>
            Email
            <Field.Required />
          </Field.Label>

          <Input size="lg" />
        </Field.Root>

        <Field.Root fullWidth>
          <Field.Label>
            Phone number
            <Field.Required />
          </Field.Label>

          <Input size="lg" />
        </Field.Root>
      </Flex>
    </Flex>
  );
};
