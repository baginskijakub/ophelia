import { Button, Flex, Icon, Text } from "@ophelia/ui";
import { useForm } from "../../../context";

interface Props {
  browseFiles: () => void;
}

export const Success = (props: Props) => {
  const { browseFiles } = props;
  const { selectedFile } = useForm();

  if (!selectedFile) return null;

  const { name } = selectedFile;

  return (
    <Flex fullWidth justify="space-between">
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

      <Button onClick={browseFiles}>Upload another file</Button>
    </Flex>
  );
};
