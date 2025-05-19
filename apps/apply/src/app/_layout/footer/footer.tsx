import { Logo, Text, Flex } from "@ophelia/ui";

export const Footer: React.FC = () => {
  return (
    <footer>
      <Flex align="center" gap={1}>
        <Text role="label" size="md" color="text-50">
          powered by
        </Text>

        <Flex align="center" gap={"05"}>
          <Logo size="md" />

          <Text role="label" size="md">
            Ophelia
          </Text>
        </Flex>
      </Flex>
    </footer>
  );
};
