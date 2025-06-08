"use client";

import { useCallback, useState } from "react";
import { useCallbackRef } from "./use-callback-ref";

export interface UseDisclosureProps {
  open?: boolean;
  defaultOpen?: boolean;
  onClose?(): void;
  onOpen?(): void;
  id?: string;
}

export function useDisclosure(props: UseDisclosureProps = {}) {
  const { onClose: onCloseProp, onOpen: onOpenProp, open: openProp } = props;

  const handleOpen = useCallbackRef(onOpenProp);
  const handleClose = useCallbackRef(onCloseProp);

  const [openState, setopen] = useState(props.defaultOpen || false);

  const open = openProp !== undefined ? openProp : openState;

  const isControlled = openProp !== undefined;

  const onClose = useCallback(() => {
    if (!isControlled) {
      setopen(false);
    }
    onCloseProp?.();
  }, [isControlled, handleClose]);

  const onOpen = useCallback(() => {
    if (!isControlled) {
      setopen(true);
    }
    handleOpen?.();
  }, [isControlled, handleOpen]);

  const onToggle = useCallback(() => {
    if (open) {
      onClose();
    } else {
      onOpen();
    }
  }, [open, onOpen, onClose]);

  return {
    open,
    onOpen,
    onClose,
    onToggle,
  };
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
