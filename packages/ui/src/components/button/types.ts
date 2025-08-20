import { ComponentPropsWithoutRef } from "react";
import { PolymorphicForwardedRef, PolymorphicProps } from "../types";

export type ButtonVariant = "solid" | "subtle" | "surface" | "outline" | "text";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonState = "default" | "loading" | "success" | "error";

export type ButtonOwnProps<T extends React.ElementType = "button"> =
  ComponentPropsWithoutRef<T> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    loading?: boolean;
    onClick?: (
      e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLElement>,
    ) => Promise<boolean | void> | void;
    children?: React.ReactNode;
    ref?: PolymorphicForwardedRef<T>;
  };

export type ButtonProps<T extends React.ElementType = "button"> =
  PolymorphicProps<ButtonOwnProps<T>, T>;
