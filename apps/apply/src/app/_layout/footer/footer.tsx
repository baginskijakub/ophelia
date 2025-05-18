import { Logo, Text, Flex } from "@ophelia/ui";

export const Footer: React.FC = () => {
  return (
    <footer>
      <Flex align="center" gap={1}>
        <Text role="label" size="md">
          powered by
        </Text>

        <Flex align="center">
          <Logo size="md" />

          <Text role="label" size="md">
            Ophelia
          </Text>
        </Flex>
      </Flex>
    </footer>
  );
};
