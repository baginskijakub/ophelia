import {
  SubContent as BaseContent,
  DropdownMenuContentProps,
} from "@radix-ui/react-dropdown-menu";
import styles from "../content/content.module.css";
import clsx from "clsx";

export const SubContent = (props: DropdownMenuContentProps) => {
  const { children, className, ...rest } = props;

  const rootClass = clsx(styles.root, className);

  return (
    <BaseContent className={rootClass} {...rest}>
      {children}
    </BaseContent>
  );
};
