import { HTMLAttributes } from "react";
import styles from "./field.module.css";
import clsx from "clsx";

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {}

export const Label = (props: LabelProps) => {
  const { children, className, ...rest } = props;

  const labelClass = clsx(styles.label, className);

  return (
    <label className={labelClass} {...rest}>
      {children}
    </label>
  );
};
