import { HTMLAttributes } from "react";
import { Text, TextProps } from "../text";
import styles from "./link.module.css";
import clsx from "clsx";

type LinkProps<T extends React.ElementType> = TextProps<T>;

export const Link = <T extends React.ElementType>(props: LinkProps<T>) => {
  const { children, as = "a", className, ...rest } = props;

  const classNames = clsx(styles.root, className);

  return (
    <Text as={as} className={classNames} {...rest}>
      {children}
    </Text>
  );
};
