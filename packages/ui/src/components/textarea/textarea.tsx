import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./input.module.css";

type TextAreaSize = 1 | 2;

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextAreaSize;
  className?: string;
}

export const Textarea = (props: Props) => {
  const { size = 1, className, ...rest } = props;

  const inputClass = clsx(styles.input, styles[`size-${size}`], className);

  return <textarea className={inputClass} {...rest} />;
};
