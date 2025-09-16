"use client";

import { useCallback } from "react";
import React from "react";
import { PolymorphicProps } from "../types";
import { ButtonSize, ButtonVariant, DEFAULTS } from "./meta";
import { clsx } from "clsx";

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    PolymorphicProps {
  disabled?: boolean;
  loading?: boolean;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export function Button(props: ButtonProps): React.ReactNode {
  const {
    loading,
    onClick,
    children,
    disabled,
    size = DEFAULTS.size,
    variant = DEFAULTS.variant,
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

  const rootClassName = clsx(
    "oph-button",
    `oph-button_size-${size}`,
    `oph-button_variant-${variant}`,
    `oph-button_size-${size}_variant-${variant}`,
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
