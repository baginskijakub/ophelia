"use client";

import clsx from "clsx";
import styles from "./button.module.css";
import { ButtonContent } from "./button-content";
import { useButton } from "./context";
import { PropsWithChildren } from "react";

export const ButtonRoot: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const {
    variant = "solid",
    size = "md",
    as,
    fullWidth = false,
    state,
    buttonProps,
  } = useButton();

  const { className, disabled, ...rest } = buttonProps;

  const classNames = clsx(
    styles.root,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    { [styles.fullWidth]: fullWidth },
    className
  );

  const Tag = as ?? "button";
  const isInteractive = state === "default";

  return (
    <Tag className={classNames} disabled={!isInteractive || disabled} {...rest}>
      <ButtonContent>{children}</ButtonContent>
    </Tag>
  );
};
