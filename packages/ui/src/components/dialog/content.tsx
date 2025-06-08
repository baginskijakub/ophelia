"use client";

import * as React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import { useDialogContext } from "./context";
import styles from "./dialog.module.css";
import { RefObject, useEffect } from "react";
import clsx from "clsx";

interface DialogContentProps extends HTMLMotionProps<"div"> {
  ref?: RefObject<HTMLDivElement | null>;
}

export const DialogContent: React.FC<DialogContentProps> = (props) => {
  const { children, className, ref, ...restProps } = props;
  const { onClose, fullScreen } = useDialogContext();

  const contentClass = clsx(styles.content, className);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClose) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.div
      ref={ref}
      role="dialog"
      aria-modal="true"
      data-fullscreen={fullScreen}
      className={contentClass}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onPointerDown={(e) => e.stopPropagation()}
      {...restProps}
    >
      {children}
    </motion.div>
  );
};

DialogContent.displayName = "DialogContent";
