import { HTMLAttributes, RefObject } from "react";
import styles from "./input.module.css";
import clsx from "clsx";

type InputSize = "sm" | "lg";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  size: InputSize;
  label?: string;
  assitiveText?: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
  fullWidth?: boolean;
  ref?: RefObject<HTMLInputElement>;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    size = "lg",
    className,
    label,
    assitiveText,
    error,
    id,
    required = false,
    fullWidth = false,
    ...rest
  } = props;

  const rootClass = clsx(styles.root, { [styles.fullWidth]: fullWidth });
  const inputClass = clsx(styles.input, styles[`size-${size}`], className);
  const errorClass = clsx(styles.label, styles["error-label"]);

  const displayAssistiveText = assitiveText && !error;

  return (
    <div className={rootClass}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
          {required && <span className={styles.asterix}> *</span>}
        </label>
      )}

      <input className={inputClass} id={id} {...rest} />

      {displayAssistiveText && (
        <span className={styles.label}>{assitiveText}</span>
      )}

      {error && <span className={errorClass}>{error}</span>}
    </div>
  );
};
