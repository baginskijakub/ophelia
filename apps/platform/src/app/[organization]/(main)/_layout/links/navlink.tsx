import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";
import styles from "./links.module.css";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const Navlink = (props: Props) => {
  const { children, href, className, ...rest } = props;

  const linkClass = clsx(styles.link, className);

  return (
    <a href={href} className={linkClass} {...rest}>
      {children}
    </a>
  );
};
