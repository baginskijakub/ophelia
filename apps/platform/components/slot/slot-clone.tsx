import {
  Children,
  cloneElement,
  isValidElement,
  PropsWithChildren,
} from "react";
import { ReactRef } from "../types";
import { mergeProps } from "./utils";

interface SlotCloneProps extends PropsWithChildren {
  ref?: ReactRef<HTMLElement>;
}

export const SlotClone: React.FC<SlotCloneProps> = (props) => {
  const { children, ...rest } = props;

  if (isValidElement(children)) {
    return cloneElement(children, mergeProps(rest, children.props as any));
  }

  if (Children.count(children) > 1) {
    return Children.only(null);
  }

  return null;
};
