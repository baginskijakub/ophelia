import { Button, Flex, Icon, Text } from "@ophelia/ui";
import { useForm } from "../../application-form/context";

export const FileUploaded = () => {
  const { selectedFile, setSelectedFile } = useForm();

  return (
    <Flex direction="column" align="center" gap={4}>
      <Icon name="check" size="xl" color="success" />

      <Text role="heading" size="sm">
        Resume Uploaded!
      </Text>

      <Text role="heading" size="md" color="text-30">
        {selectedFile?.name}
      </Text>

      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          setSelectedFile(null);
        }}
      >
        Upload a different file
      </Button>
    </Flex>
  );
};
