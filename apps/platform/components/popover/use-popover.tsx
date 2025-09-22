import { usePopoverContext } from "./context";
import {
  useFloating,
  autoUpdate,
  offset,
  shift,
  flip,
  Placement,
} from "@floating-ui/react-dom";
import { AttributeGetter } from "../types";
import { useState } from "react";

export interface UsePopover {
  placement: Placement;
  getTriggerProps: AttributeGetter<HTMLButtonElement>;
  getContentProps: AttributeGetter<HTMLDivElement>;

  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const usePopover = (): UsePopover => {
  const {
    side = "bottom",
    align = "center",
    sideOffset = 8,
    alignOffset = 0,
  } = usePopoverContext();

  const [open, setOpen] = useState(false);

  const placementValue = (side +
    (align !== "center" ? "-" + align : "")) as Placement;

  const { refs, floatingStyles, placement } = useFloating({
    open,
    placement: placementValue,
    middleware: [
      offset({
        mainAxis: sideOffset,
        alignmentAxis: alignOffset,
      }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const getTriggerProps: AttributeGetter<HTMLButtonElement> = (props = {}) => ({
    ...props,
    ref: refs.setReference,
    "aria-expanded": open,
    "aria-haspopup": "dialog",
    style: {
      position: "relative",
      ...props.style,
    },
    onClick: (e) => {
      setOpen((prev) => !prev);
      props.onClick?.(e);
    },
  });

  const getContentProps: AttributeGetter<HTMLDivElement> = (props = {}) => ({
    ...props,
    ref: refs.setFloating,
    style: {
      ...(open ? floatingStyles : { visibility: "hidden" }),
      ...props.style,
    },
  });

  return {
    placement,
    getContentProps,
    getTriggerProps,
    open,
    setOpen,
  };
};
