import { Flex, Text } from "@ophelia/ui";
import { PlaceholderVisual } from "./placeholder-visual";
import styles from "./applicants.module.css";

export const Placeholder = () => {
  return (
    <div className={styles.placeholderRoot}>
      <PlaceholderVisual />

      <Flex direction="column" gap={1}>
        <Text role="label" color="text-70" size="lg">
          There are no applicants yet
        </Text>

        <Text role="paragraph" color="text-50" size="md">
          Once first candidates apply for the job, you will see their profiles
          here.
        </Text>
      </Flex>
    </div>
  );
};
