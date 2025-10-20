import { cx } from "@platform/utils";
import { HTMLAttributes, InputHTMLAttributes } from "react";

export const Root = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cx("flex flex-col gap-1", className)} {...rest}>
      {children}
    </div>
  );
};

export const Label = (props: HTMLAttributes<HTMLLabelElement>) => {
  const { children, className, ...rest } = props;

  return (
    <label className={cx("text-xs text-tertiary pl-0.5", className)} {...rest}>
      {children}
    </label>
  );
};

export const InputGroup = (props: HTMLAttributes<HTMLDivElement>) => {
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

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props;

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

export const NumberInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const { className, ...rest } = props;

  return (
    <input
      type="number"
      className={cx(
        "flex-1",
        "focus:outline-none",
        "text-xs text-primary font-light",
        className,
      )}
      {...rest}
    />
  );
};

export const PixelIndicator = (props: HTMLAttributes<HTMLSpanElement>) => {
  const { className, ...rest } = props;

  return (
    <span
      className={cx("pr-1 text-xs text-tertiary font-mono", className)}
      {...rest}
    >
      px
    </span>
  );
};
