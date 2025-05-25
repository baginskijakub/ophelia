import { Flex, Icon, Text } from "@ophelia/ui";
import styles from "./resume-step.module.css";

export const ResumeStep = () => {
  return (
    <Flex direction="column">
      <Flex direction="column" align="center" gap={4}>
        <Icon name="sparkles" size="xl" className={styles["header-icon"]} />

        <Text role="heading" size="sm" align="center">
          Upload you resume and we will fill out the application for you.
        </Text>
      </Flex>
    </Flex>
  );
};
