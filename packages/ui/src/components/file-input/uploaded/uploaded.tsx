import { useFileInput } from "../context";
import { Icon } from "../../icon";
import { Flex } from "../../flex";

export const Uploaded = () => {
  const { fileName } = useFileInput();

  return (
    <Flex align="center" gap={2}>
      <Icon name="check" size="md" />
      <span>{fileName}</span>
    </Flex>
  );
};
