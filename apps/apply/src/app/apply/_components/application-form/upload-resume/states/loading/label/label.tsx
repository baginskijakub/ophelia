import { Text } from "@ophelia/ui";
import { useEffect, useState } from "react";
import styles from "./label.module.css";

const LABELS = [
  "Uploading...",
  "Scanning contact information...",
  "Scanning education...",
  "Scanning experience...",
];

const STEP_DURATION = 3000;

export const Label = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    if (currentStepIndex < LABELS.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStepIndex((prevIndex) => prevIndex + 1);
      }, STEP_DURATION);

      return () => clearTimeout(timer);
    }
  }, [currentStepIndex]);

  return (
    <div className={styles.root}>
      <span
        className={styles.position}
        style={{ marginTop: `-${currentStepIndex * 24}px` }}
      >
        {LABELS.map((label) => (
          <Text role="label" size="md" className={styles.item} key={label}>
            {label}
          </Text>
        ))}
      </span>
    </div>
  );
};
