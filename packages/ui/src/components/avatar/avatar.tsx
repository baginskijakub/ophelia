import clsx from "clsx";
import { HTMLAttributes } from "react";
import styles from "./avatar.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  size: "sm" | "md" | "lg";
}

export const Avatar = (props: Props) => {
  const { size = "md", className, children, ...rest } = props;

  const rootClass = clsx(styles.root, styles[`size-${size}`], className);

  return (
    <div className={rootClass} {...rest}>
      {children}
    </div>
  );
};
