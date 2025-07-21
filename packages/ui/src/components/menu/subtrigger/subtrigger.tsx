import {
  SubTrigger as BaseTrigger,
  DropdownMenuSubTriggerProps,
} from "@radix-ui/react-dropdown-menu";
import styles from "../item/item.module.css";
import clsx from "clsx";

export const SubTrigger = (props: DropdownMenuSubTriggerProps) => {
  const { children, className, ...rest } = props;

  const rootClass = clsx(className, styles.root);

  return (
    <BaseTrigger className={rootClass} {...rest}>
      {children}
    </BaseTrigger>
  );
};
