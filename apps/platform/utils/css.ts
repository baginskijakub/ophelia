import { Border, ColorRef, TypographyRef } from "@repo/types";
import { CSSProperties } from "react";

const getBorder = (border: Border): string => {
  return `${border.width} solid ${getColor(border.color)}`;
};

const getColor = (color: ColorRef) => {
  if (color.type === "primitive") {
    return `var(--color-${color.key}-${color.shade})`;
  }
  return `var(--color-${color.groupKey}-${color.colorKey})`;
};

const getTypography = (typography: TypographyRef): CSSProperties => {
  return {
    fontSize: `var(--typography-font-size-${typography.sizeKey})`,
    fontWeight: `var(--typography-font-weight-${typography.variantKey})`,
    lineHeight: `var(--typography-line-height-${typography.sizeKey})`,
    letterSpacing: `var(--typography-letter-spacing-${typography.sizeKey}-${typography.variantKey})`,
  };
};

const getPixelValue = (value: string | number): string => {
  return typeof value === "number" ? `${value}px` : value;
};

export const CSS = { getBorder, getColor, getTypography, getPixelValue };
