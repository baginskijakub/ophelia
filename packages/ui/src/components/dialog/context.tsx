"use client";

import * as React from "react";

interface DialogContextValue {
  open?: boolean;
  onClose?: () => void;
  fullScreen: boolean;
}

export const DialogContext = React.createContext<DialogContextValue | null>(
  null
);

export const useDialogContext = () => {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error(
      "Dialog components must be used within a <Dialog.Root> component."
    );
  }
  return context;
};
