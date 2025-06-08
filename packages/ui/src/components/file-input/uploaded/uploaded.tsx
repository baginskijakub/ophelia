import * as React from "react";
import { useFileInput } from "../context";
import { Icon } from "../../icon";
import { Flex } from "../../flex";

export const Uploaded = () => {
  const { fileName, onClear } = useFileInput();

  const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClear?.();
  };

  return (
    <Flex align="center" gap={2}>
      <Icon name="x" size="md" />
      <span>{fileName}</span>
      <button onClick={handleClear}>
        <Icon name="x" size="sm" />
      </button>
    </Flex>
  );
};
