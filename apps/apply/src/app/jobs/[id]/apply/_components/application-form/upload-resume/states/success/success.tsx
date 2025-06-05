import { Flex, Icon, Text } from "@ophelia/ui";
import { useForm } from "../../../context";
import styles from "./success.module.css";

export const Success = () => {
  const { selectedFile } = useForm();

  if (!selectedFile) return null;

  const { name } = selectedFile;

  return (
    <Flex direction="column" gap={1} fill>
      <Flex align="center" gap={1.5}>
        <Icon name="sparkles" size="md" color="brand" />

        <Text role="label" size="lg">
          {name} uploaded successfully
        </Text>
      </Flex>

      <Text role="paragraph" size="sm" color="text-50">
        We've autofilled the application for you, please review it before
        submitting.
      </Text>
    </Flex>
  );
};
