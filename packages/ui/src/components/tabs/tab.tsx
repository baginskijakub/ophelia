import clsx from "clsx";
import React from "react";
import styles from "./tab.module.css";

type TabProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  active?: boolean;
}

export const Tab = <T extends React.ElementType>(props: TabProps<T>) => {
  const { as, active, className, children, ...rest } = props;

  const Tag = as || "button";

  const rootClass = clsx(
    className,
    styles.root,
    {
      [styles.active]: active
    }
  )

  return (
    <Tag className={rootClass} {...rest}>
      {children}
    </Tag>
  );
}
