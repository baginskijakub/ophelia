import { HTMLAttributes } from "react";
import styles from "./separator.module.css";
import clsx from "clsx";

interface SeparatorProps extends HTMLAttributes<HTMLSpanElement> {
  orientation?: "horizontal" | "vertical";
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  const { orientation = "horizontal", className, ...rest } = props;

  const separatorClass = clsx(styles[orientation], className);

  return <span className={separatorClass} {...rest} />;
};
