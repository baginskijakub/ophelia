import { Button, Flex, Icon, Text } from "@ophelia/ui";
import styles from "./resume-step.module.css";

export const ResumeStep = () => {
  return (
    <Flex direction="column" gap={8}>
      <Flex direction="column" align="center" gap={4} fullWidth>
        <Icon name="sparkles" size="xl" className={styles["header-icon"]} />

        <Text role="heading" size="sm" align="center">
          Upload your resume and we will fill out the application for you.
        </Text>
      </Flex>

      <div className={styles["upload-root"]}>
        <div className={styles["upload-root-inner"]}>
          <Icon name="upload" size="lg" className={styles["upload-icon"]} />

          <Text role="label" size="md" color="brand">
            Drag and drop
          </Text>
        </div>

        <div className={styles["upload-root-center"]}>
          <span className={styles.separator} />

          <Text role="paragraph" size="sm">
            OR
          </Text>

          <span className={styles.separator} />
        </div>

        <div className={styles["upload-root-inner"]}>
          <Text role="label" size="md" color="brand">
            Choose a file from your computer
          </Text>

          <Button size="sm" variant="solid">
            Browse files
          </Button>
        </div>
      </div>
    </Flex>
  );
};
