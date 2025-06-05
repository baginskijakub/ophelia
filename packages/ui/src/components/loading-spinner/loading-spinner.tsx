import React from "react";
import { Loader2 } from "lucide-react";
import styles from "./loading-spinner.module.css";
import clsx from "clsx";

type SpinnerSize = "sm" | "md" | "lg";

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize;
}

export const LoadingSpinner = (props: LoadingSpinnerProps) => {
  const { size = "md", className, ...rest } = props;

  const rootClass = clsx(styles["root"], styles[size], className);

  return (
    <div
      className={rootClass}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      {...rest}
    >
      <Loader2 className={styles.icon} />
    </div>
  );
};
