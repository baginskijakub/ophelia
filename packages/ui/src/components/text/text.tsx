import React from "react";
import clsx from "clsx";
import styles from "./text.module.css";
import { tagMapper, TextProps } from "./types";

export const Text: React.FC<TextProps> = (props) => {
  const { role, size, as, className, ...rest } = props;

  const classNames = clsx(
    styles.base,
    styles[role],
    styles[`${role}-${size}`],
    className
  );

  const Tag = as ?? tagMapper(props);

  return <Tag className={classNames} {...rest} />;
};
