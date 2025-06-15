import React from "react";
import clsx from "clsx";
import styles from "./text.module.css";
import { tagMapper, TextProps } from "./types";

export const Text = <T extends React.ElementType>(props: TextProps<T>) => {
  const { role, size, color, as, className, align, ...rest } = props;

  const classNames = clsx(
    styles.base,
    styles[role],
    styles[`${role}-${size}`],
    styles[`color-${color}`],
    styles[`text-${align}`],
    className
  );

  const Tag = as ?? tagMapper(props.role);

  console.log(Tag);

  return <Tag className={classNames} {...rest} />;
};
