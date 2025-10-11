"use client";

import { useColorPicker } from "./use-color-picker";
import { Input, InputProps } from "../input";
import React, { useState, useEffect, KeyboardEvent } from "react";
import { colord } from "colord";

interface ColorInputProps
  extends Omit<
      React.HTMLAttributes<HTMLInputElement>,
      "type" | "value" | "onChange" | "size" | "color"
    >,
    InputProps {}

export const ColorInput = (props: ColorInputProps) => {
  const { ...rest } = props;

  const { color, handleInputChange } = useColorPicker();

  const [localInputValue, setLocalInputValue] = useState(color);

  useEffect(() => {
    if (color.toLowerCase() !== localInputValue.toLowerCase()) {
      setLocalInputValue(color);
    }
  }, [color]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = event.target.value;

    if (rawValue.length > 7) {
      return;
    }

    const sanitizedValue = rawValue.replace(/[^0-9a-fA-F#]/g, "").toLowerCase();
    setLocalInputValue(sanitizedValue);
  };

  const handleBlur = () => {
    let valueToProcess = localInputValue.trim();

    if (valueToProcess.startsWith("#")) {
      valueToProcess = valueToProcess.substring(1);
    }

    const currentColord = colord(`#${valueToProcess}`);

    if (currentColord.isValid()) {
      handleInputChange(currentColord.toHex());
    } else {
      if (valueToProcess.length > 0 && /^[0-9A-F]+$/i.test(valueToProcess)) {
        const fullHex = padHexColor(valueToProcess);

        const paddedColord = colord(`#${fullHex}`);
        if (paddedColord.isValid()) {
          setLocalInputValue(paddedColord.toHex());
          handleInputChange(paddedColord.toHex());
          return;
        }
      }

      setLocalInputValue(color);
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      event.currentTarget.blur();
    }
  };

  return (
    <Input
      value={localInputValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      {...rest}
    />
  );
};

export const padHexColor = (partialHex: string): string => {
  const len = partialHex.length;

  if (len === 1) return `${partialHex}00000`;
  if (len === 2) return `${partialHex}0000`;
  if (len === 3) return `${partialHex}000`;
  if (len === 4) return `${partialHex}00`;
  if (len === 5) return `${partialHex}0`;

  return partialHex;
};
