import { Item as BaseItem, DropdownMenuItemProps } from "@radix-ui/react-dropdown-menu";
import styles from "./item.module.css";
import clsx from "clsx";

export const Item = (props: DropdownMenuItemProps) => {
  const { children, className, ...rest } = props;

  const rootClass = clsx(className, styles.root)

  return (
    <BaseItem
      className={rootClass}
      {...rest}
    >
      {children}
    </BaseItem>
  )
}
