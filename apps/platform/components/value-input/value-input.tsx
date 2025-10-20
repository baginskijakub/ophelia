import { cx } from "@platform/utils";
import { HTMLAttributes } from "react";

interface RootProps extends HTMLAttributes<HTMLDivElement> {}

export const Root = (props: RootProps) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={cx(
        "bg-gray-300 text-tertiary rounded-sm",
        "px-1 h-6",
        "flex items-center gap-1",
        "transition-shadow focus-within:ring-2 ring-gray-500",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export const Input = (props: HTMLAttributes<HTMLInputElement>) => {
  const { children, className, ...rest } = props;

  return (
    <input
      className={cx(
        "focus:outline-none",
        "text-xs text-primary font-light",
        className,
      )}
      {...rest}
    />
  );
};
