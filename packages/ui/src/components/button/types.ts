import { PolymorphicComponentProps } from "../types";

export type ButtonVariant = "solid" | "surface" | "outline" | "text";

export type ButtonSize = "sm" | "md" | "lg";

export type ButtonState = "default" | "loading" | "success" | "error";

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement | HTMLElement>,
  ) => Promise<boolean | void> | void;

  children?: React.ReactNode;
}

export type ButtonProps<TElementType extends React.ElementType = "button"> =
  PolymorphicComponentProps<TElementType, ButtonBaseProps>;
