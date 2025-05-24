import { Button, Text, Icon } from "@ophelia/ui";
import styles from "./apply-section.module.css";

export const ApplySection = () => {
  return (
    <div className={styles.root}>
      <Text role="paragraph" size="lg" color="brand">
        Upload your resume and fill out a short form to apply.
      </Text>

      <Button size="lg" className={styles.button}>
        Apply now
        <Icon name="arrow-right" />
      </Button>
    </div>
  );
};
