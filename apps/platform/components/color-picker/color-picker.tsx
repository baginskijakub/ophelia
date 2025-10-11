"use client";

import React from "react";
import {
  ColorPickerProps as ColorPickerProviderProps,
  ColorPickerProvider,
} from "./use-color-picker";

interface ColorPickerProps extends ColorPickerProviderProps {}

export const ColorPicker = (props: ColorPickerProps) => {
  const { color, onChange, children } = props;

  return (
    <ColorPickerProvider color={color} onChange={onChange}>
      {children}
    </ColorPickerProvider>
  );
};
