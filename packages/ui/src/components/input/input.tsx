import { HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./input.module.css";

type InputSize = "sm" | "lg";

interface Props extends HTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  className?: string;
}

export const Input = (props: Props) => {
  const { size = "lg", className, ...rest } = props;

  const inputClass = clsx(styles.input, styles[`size-${size}`], className);

  return <input className={inputClass} {...rest} />;
};
