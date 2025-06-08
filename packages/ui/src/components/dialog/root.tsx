import * as React from "react";
import { DialogContext } from "./context";
import { AnimatePresence } from "framer-motion";

interface DialogRootProps {
  children: React.ReactNode;
  open?: boolean;
  onClose?: () => void;
  fullScreen?: boolean;
}

export const DialogRoot = (props: DialogRootProps) => {
  const { children, open, onClose, fullScreen = false } = props;

  return (
    <DialogContext.Provider
      value={{
        open,
        onClose,
        fullScreen,
      }}
    >
      <AnimatePresence>{open && children}</AnimatePresence>
    </DialogContext.Provider>
  );
};
