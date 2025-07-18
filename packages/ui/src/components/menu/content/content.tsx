import { Content as BaseContent, DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import styles from './content.module.css';
import clsx from "clsx";

export const Content = (props: DropdownMenuContentProps) => {
  const { children, className, ...rest } = props;

  const rootClass = clsx(styles.root, className)

  return (
    <BaseContent className={rootClass} {...rest}>
      {children}
    </BaseContent>
  )
}
