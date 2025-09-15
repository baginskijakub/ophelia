"use client";

import { useCallback } from "react";
import classNames from "classnames";
import React from "react";
import { PolymorphicProps } from "../types";

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    PolymorphicProps {
  disabled?: boolean;
  loading?: boolean;
  size: Dynamic.ButtonSize;
  variant: Dynamic.ButtonVariant;
}

export function Button(props: ButtonProps): React.ReactNode {
  const {
    loading,
    onClick,
    children,
    disabled,
    size,
    variant,
    className,
    as = "button",
    ...rest
  } = props;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (loading || disabled) return;

      onClick?.(event);
    },
    [disabled, loading, onClick],
  );

  const rootClassName = classNames(
    "oph-button-root",
    `oph-button-root--size_${size}`,
    `oph-button-root--variant_${variant}`,
    className,
  );

  const Element = as || "button";

  return (
    <Element
      disabled={disabled}
      onClick={handleClick}
      data-loading={loading}
      className={rootClassName}
      {...rest}
    >
      {children}
    </Element>
  );
}
