import { Button, Text, Icon } from "@ophelia/ui";
import styles from "./apply-section.module.css";
import clsx from "clsx";

interface Props {
  onApply: () => void;
}

export const ApplySection: React.FC<Props> = (props) => {
  const { onApply } = props;

  return (
    <div className={clsx("unfold", "delay-2", styles.root)}>
      <Text role="paragraph" size="lg" color="brand">
        Upload your resume and fill out a short form to apply.
      </Text>

      <Button size="lg" className={styles.button} onClick={onApply}>
        Apply now
        <Icon name="arrow-right" />
      </Button>
    </div>
  );
};
