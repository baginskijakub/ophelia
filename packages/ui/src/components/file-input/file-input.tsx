"use client";

import { InputHTMLAttributes, RefObject, forwardRef } from "react";
import clsx from "clsx";
import { FileInputContext } from "./context";
import styles from "./file-input.module.css";
import { Uploaded } from "./uploaded";
import { Idle } from "./idle";

type FileInputSize = 1 | 2;

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: FileInputSize;
  placeholder?: string;
  fileName?: string;
  onClear?: () => void;
  ref?: RefObject<HTMLInputElement | null>;
}

export const FileInput: React.FC<Props> = (props) => {
  const {
    size = 1,
    className,
    placeholder = "Choose a file...",
    fileName,
    onClear,
    children,
    ...rest
  } = props;

  const rootClass = clsx(styles.root, styles[`size-${size}`], className);

  const contextValue = {
    size,
    placeholder,
    fileName,
    onClear,
  };

  return (
    <FileInputContext.Provider value={contextValue}>
      <label className={rootClass}>
        {fileName ? <Uploaded /> : <Idle />}
        <input type="file" className={styles.hidden} {...rest} />
      </label>
    </FileInputContext.Provider>
  );
};
