import { Flex, LoadingSpinner } from "@ophelia/ui";
import { Label } from "./label";

export const Loading = () => {
  return (
    <Flex align="center" gap={2}>
      <LoadingSpinner size="sm" />
      <Label />
    </Flex>
  );
};
