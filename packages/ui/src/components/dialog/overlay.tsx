import { HTMLMotionProps, motion } from "framer-motion";
import { useDialogContext } from "./context";
import styles from "./dialog.module.css";
import { RefObject } from "react";

interface DialogOverlayProps extends HTMLMotionProps<"div"> {
  ref?: RefObject<HTMLDivElement | null>;
}

export const DialogOverlay: React.FC<DialogOverlayProps> = (props) => {
  const { onClose } = useDialogContext();

  return (
    <motion.div
      className={styles.overlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      {...props}
    />
  );
};

DialogOverlay.displayName = "DialogOverlay";
