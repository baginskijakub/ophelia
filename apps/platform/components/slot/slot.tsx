import React, { Children, isValidElement, ReactElement } from "react";
import { SlotClone } from "./slot-clone";
import { Slottable } from "./slottable";

export interface SlotProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
}

export const Slot: React.FC<SlotProps> = (props) => {
  const { children, ref, ...rest } = props;

  const childrenArray = React.Children.toArray(children);

  const slottable = childrenArray.find(
    (child) => isValidElement(child) && child.type === Slottable,
  ) as ReactElement<any>;

  if (!slottable) {
    return (
      <SlotClone ref={ref} {...rest}>
        {children}
      </SlotClone>
    );
  }

  const newElement = slottable.props.children;

  const newChildren = childrenArray.map((child) => {
    if (child !== slottable) return child;

    if (Children.count(newElement) > 1) return Children.only(null);

    if (isValidElement(newElement))
      return (newElement.props as { children: React.ReactNode }).children;

    return null;
  });

  return (
    <SlotClone {...rest} ref={ref}>
      {React.isValidElement(newElement)
        ? React.cloneElement(newElement, undefined, newChildren)
        : null}
    </SlotClone>
  );
};
