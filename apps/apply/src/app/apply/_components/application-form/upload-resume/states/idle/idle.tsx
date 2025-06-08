import { Button, Flex, Icon, Text } from "@ophelia/ui";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  browseFiles: () => void;
}

export const Idle = (props: Props) => {
  const { children, browseFiles } = props;

  return (
    <Flex fullWidth justify="space-between">
      <Flex direction="column" gap={1} fill>
        <Flex align="center" gap={1.5}>
          <Icon name="sparkles" size="md" color="brand" />

          <Text role="label" size="lg">
            Autofill with resume
          </Text>
        </Flex>

        <Text role="paragraph" size="sm" color="text-50">
          Upload your resume to fill out the job application
        </Text>
      </Flex>

      <Button onClick={browseFiles}>Upload file</Button>

      {children}
    </Flex>
  );
};
