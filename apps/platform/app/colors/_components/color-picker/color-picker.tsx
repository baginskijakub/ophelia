"use client";

import React from "react";
import { SaturationLightnessPicker } from "./saturation-lightness-picker";
import { HueSlider } from "./hue-slider";
import {
  ColorPickerProps as ColorPickerProviderProps,
  ColorPickerProvider,
} from "./use-color-picker";
import { ColorInput } from "./color-input";
import { cx } from "@platform/utils";

interface ColorPickerProps
  extends ColorPickerProviderProps,
    Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "onChange"> {}

export const ColorPicker = (props: ColorPickerProps) => {
  const { color, onChange, className, ...rest } = props;

  return (
    <ColorPickerProvider color={color} onChange={onChange}>
      <div className={cx("flex flex-col gap-4", className)} {...rest}>
        <ColorInput />

        <SaturationLightnessPicker />

        <HueSlider />
      </div>
    </ColorPickerProvider>
  );
};
