import { Button, Flex, Icon, Text } from "@ophelia/ui";
import styles from "./idle.module.css";

interface Props {
  ref: React.RefObject<HTMLDivElement | null>;
}

export const Idle = (props: Props) => {
  const { ref } = props;

  return (
    <div ref={ref} className={styles["upload-root"]}>
      <Flex direction="column" gap={1} fill>
        <Flex align="center" gap={1.5}>
          <Icon name="sparkles" size="md" className={styles["header-icon"]} />

          <Text role="label" size="lg">
            Autofill with resume
          </Text>
        </Flex>

        <Text role="paragraph" size="sm" color="text-50">
          Upload your resume to fill out the job application
        </Text>
      </Flex>

      <Button>Upload file</Button>
    </div>
  );
};
