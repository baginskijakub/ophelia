import { HTMLAttributes } from "react";
import styles from "./field.module.css";
import clsx from "clsx";

export interface AssistiveTextProps extends HTMLAttributes<HTMLSpanElement> {}

export const AssistiveText = (props: AssistiveTextProps) => {
  const { children, className, ...rest } = props;

  const rootClass = clsx(styles.label, className);

  return (
    <span className={rootClass} {...rest}>
      {children}
    </span>
  );
};
