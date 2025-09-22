import React, { isValidElement } from "react";

import { mergeProps } from "./utils";
import { ReactRef } from "../types";

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  ref?: ReactRef<HTMLElement>;
}

export const Slot: React.FC<SlotProps> = (props) => {
  const { children, ...rest } = props;

  if (!isValidElement(children)) {
    return null;
  }

  const isSlottable = children.type === Slottable;

  if (isSlottable) {
    const newElement = (children as React.ReactElement<any>).props.children;

    if (!isValidElement(newElement)) {
      return null;
    }

    return <SlotClone {...rest}>{newElement}</SlotClone>;
  }

  return <SlotClone {...rest}>{children}</SlotClone>;
};

export const Slottable: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

interface SlotCloneProps extends React.PropsWithChildren {
  ref?: ReactRef<HTMLElement>;
}

const SlotClone: React.FC<SlotCloneProps> = (props) => {
  const { children, ...rest } = props;

  if (isValidElement(children)) {
    return React.cloneElement(
      children,
      mergeProps(rest, children.props as any),
    );
  }

  return null;
};
