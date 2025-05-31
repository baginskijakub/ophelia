import { HTMLAttributes } from "react";
import styles from "./field.module.css";
import clsx from "clsx";

export interface ErrorTextProps extends HTMLAttributes<HTMLSpanElement> {}

export const ErrorText = (props: ErrorTextProps) => {
  const { children, className, ...rest } = props;

  const errorClass = clsx(styles.label, styles["error-label"], className);

  return (
    <span className={errorClass} {...rest}>
      {children}
    </span>
  );
};
