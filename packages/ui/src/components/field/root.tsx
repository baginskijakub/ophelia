import { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./field.module.css";
import clsx from "clsx";

export interface RootProps extends HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean;
}

export const Root = (props: RootProps) => {
  const { children, fullWidth = false, className, ...rest } = props;

  const rootClass = clsx(styles.root, {
    [styles.fullWidth]: fullWidth,
    className,
  });

  return (
    <div className={rootClass} {...rest}>
      {children}
    </div>
  );
};
