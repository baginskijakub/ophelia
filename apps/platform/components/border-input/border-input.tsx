"use client";

import { Border } from "@repo/types";
import { ValueInput } from "../value-input";
import { createContext, HTMLAttributes, useContext } from "react";
import { cx } from "@platform/utils";

interface BorderInputContextValues {
  value?: Border;
  updateValue: (value?: Border) => void;
}

const BorderInputContext = createContext<BorderInputContextValues>(
  {} as BorderInputContextValues,
);

export const useBorderInputContext = () => {
  const context = useContext(BorderInputContext);

  if (!context) {
    throw new Error(
      "BorderInput components must be used within a BorderInputProvider",
    );
  }

  return context;
};

interface RootProps
  extends HTMLAttributes<HTMLDivElement>,
    BorderInputContextValues {
  value?: Border;
  updateValue: (value?: Border) => void;
}

const Root = (props: RootProps) => {
  const { value, updateValue, children, className, ...rest } = props;

  return (
    <BorderInputContext.Provider value={{ value, updateValue }}>
      <div className={cx("flex flex-col gap-1", className)} {...rest}>
        {children}
      </div>
    </BorderInputContext.Provider>
  );
};

const Content = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;

  return (
    <div className={cx("flex items-center gap-1", className)} {...rest}>
      {children}
    </div>
  );
};

const WidthInput = () => {
  const { value, updateValue } = useBorderInputContext();

  const handleWidthChange = (newWidth?: number) => {
    updateValue({
      ...value,
      width: newWidth ?? 0,
    });
  };

  return (
    <ValueInput.Root>
      <ValueInput.Input
        value={value?.width}
        type="number"
        onChange={(e) => handleWidthChange(parseInt(e.target.value))}
      />
    </ValueInput.Root>
  );
};

export default {
  Root,
  Content,
  WidthInput,
  Label: ValueInput.Label,
};
