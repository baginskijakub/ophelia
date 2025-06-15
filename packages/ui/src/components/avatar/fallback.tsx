import { HTMLAttributes } from "react";
import { Text } from "../text";
import { TextColor } from "../text/types";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  color: TextColor;
}

export const Fallback = (props: Props) => {
  const { children, className, role: _, color = "text-50", ...rest } = props;

  return (
    <Text role="label" color={color} size="md" as="span" {...rest}>
      {children}
    </Text>
  );
};
