import { HTMLAttributes } from "react";

interface SeparatorProps extends HTMLAttributes<HTMLSpanElement> {}

export const Separator = (props: SeparatorProps) => {
  return (
    <span className="border-primary-style border-t-[0.5px] w-full" {...props} />
  );
};
