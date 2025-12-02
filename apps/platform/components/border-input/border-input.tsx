"use client";

import { Border, ColorRef } from "@repo/types";
import { ValueInput } from "../value-input";
import { ColorInput as DefaultColorInput } from "../color-input";
import { createContext, HTMLAttributes, useContext } from "react";
import { cx } from "@platform/utils";
import { useNumberInput } from "@platform/hooks";

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

  const { inputProps } = useNumberInput(value?.width ?? 0, handleWidthChange);

  return (
    <ValueInput.Root className="w-12">
      <ValueInput.InputGroup className="w-full">
        <ValueInput.NumberInput className="w-full" {...inputProps} />
        <ValueInput.PixelIndicator />
      </ValueInput.InputGroup>
    </ValueInput.Root>
  );
};

const ColorInput = () => {
  const { value, updateValue } = useBorderInputContext();

  const handleColorChange = (color?: ColorRef) => {
    updateValue({
      ...value,
      width: value?.width ?? 0,
      color,
    });
  };

  return (
    <DefaultColorInput.Root
      className="flex-1"
      value={value?.color}
      updateValue={handleColorChange}
    >
      <DefaultColorInput.Content>
        <DefaultColorInput.Trigger>
          <DefaultColorInput.ColorPreview />
        </DefaultColorInput.Trigger>

        <DefaultColorInput.RemoveButton />
      </DefaultColorInput.Content>

      <DefaultColorInput.Select />
    </DefaultColorInput.Root>
  );
};

export default {
  Root,
  Content,
  WidthInput,
  ColorInput,
  Label: ValueInput.Label,
};
