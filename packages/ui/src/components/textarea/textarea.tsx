import { TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./textarea.module.css";

type TextAreaSize = 1 | 2;

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: TextAreaSize;
  className?: string;
  minHeight?: number | string;
}

export const TextArea = (props: Props) => {
  const { size = 1, className, minHeight, ...rest } = props;

  const inputClass = clsx(styles.textarea, styles[`size-${size}`], className);

  return <textarea className={inputClass} style={{ minHeight }} {...rest} />;
};
