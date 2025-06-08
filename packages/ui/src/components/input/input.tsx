import { InputHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./input.module.css";

type InputSize = 1 | 2;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  size?: InputSize;
  className?: string;
}

export const Input = (props: Props) => {
  const { size = 1, className, ...rest } = props;

  const inputClass = clsx(styles.input, styles[`size-${size}`], className);

  return <input className={inputClass} {...rest} />;
};
