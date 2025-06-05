import { HTMLAttributes } from "react";
import styles from "./field.module.css";
import clsx from "clsx";

export interface RequiredProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {}

export const Required = (props: RequiredProps) => {
  const { className, ...rest } = props;

  const rootClass = clsx(styles.required, className);

  return (
    <span className={rootClass} {...rest}>
      *
    </span>
  );
};
