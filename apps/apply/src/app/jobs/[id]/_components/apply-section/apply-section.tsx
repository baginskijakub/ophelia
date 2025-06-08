import { Button, Text, Icon } from "@ophelia/ui";
import styles from "./apply-section.module.css";
import clsx from "clsx";

export const ApplySection = () => {
  return (
    <div className={clsx("unfold", "delay-2", styles.root)}>
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
