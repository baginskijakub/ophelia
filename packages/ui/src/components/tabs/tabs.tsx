import clsx from "clsx";
import { HTMLAttributes } from "react";
import styles from "./tabs.module.css";

interface TabsProps extends HTMLAttributes<HTMLDivElement> { }

export const TabsRoot = (props: TabsProps) => {
  const { children, className, ...rest } = props;

  const rootClassName = clsx(className, styles.root)

  return <div className={rootClassName} {...rest}>{children}</div>;
}
