import * as React from "react";
import { useDialogContext } from "./context";
import { Icon } from "../icon";
import { RefObject } from "react";
import styles from "./dialog.module.css";

interface DialogCloseProps extends React.HTMLAttributes<HTMLButtonElement> {
  ref?: RefObject<HTMLButtonElement | null>;
}

export const DialogClose = (props: DialogCloseProps) => {
  const { children, onClick, ref, ...restProps } = props;

  const { onClose } = useDialogContext();

  return (
    <button
      ref={ref}
      onClick={(e) => {
        onClose && onClose();
        onClick?.(e);
      }}
      className={styles["close-button"]}
      {...restProps}
    >
      <Icon size="md" name="x" color="icon-30" />
    </button>
  );
};
