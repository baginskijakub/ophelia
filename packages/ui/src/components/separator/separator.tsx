import { HTMLAttributes } from "react";
import styles from "./separator.module.css";

interface SeparatorProps extends HTMLAttributes<HTMLSpanElement> {
  orientation?: "horizontal" | "vertical";
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  const { orientation = "horizontal", ...rest } = props;

  return <span className={styles[orientation]} {...rest} />;
};
