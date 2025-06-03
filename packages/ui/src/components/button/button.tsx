import clsx from "clsx";
import styles from "./button.module.css";

type ButtonVariant = "solid" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonPropsOwnProps<T extends React.ElementType> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: T;
  fullWidth?: boolean;
}

type ButtonProps<T extends React.ElementType> = ButtonPropsOwnProps<T> &
  React.ComponentProps<T>;

export const Button = <T extends React.ElementType = "button">(
  props: ButtonProps<T>
) => {
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
