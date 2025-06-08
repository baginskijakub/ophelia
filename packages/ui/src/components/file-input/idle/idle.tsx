import { useFileInput } from "../context";
import { Icon } from "../../icon";
import { Flex } from "../../flex";

export const Idle = () => {
  const { placeholder } = useFileInput();

  return (
    <Flex align="center" gap={2}>
      <Icon name="upload" size="md" />
      <span>{placeholder}</span>
    </Flex>
  );
};
