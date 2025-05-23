import clsx from "clsx";
import styles from "./button.module.css";
import { HTMLAttributes } from "react";

type ButtonVariant = "solid" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: React.ElementType;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = "solid",
    size = "md",
    as,
    fullWidth = false,
    children,
    className,
    ...rest
  } = props;

  const classNames = clsx(
    styles.root,
    { [styles[`variant-${variant}`]]: variant },
    { [styles[`size-${size}`]]: size },
    { [styles.fullWidth]: fullWidth },
    className
  );

  const Tag = as ?? "button";

  return (
    <Tag className={classNames} {...rest}>
      {children}
    </Tag>
  );
};
