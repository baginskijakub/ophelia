import { Border, SemanticRef, TypographyRef } from "@repo/types";
import { CSSProperties } from "react";

export const getBorderCss = (border: Border): string => {
  return `${border.width} solid ${getSemanticColor(border.color)}`;
};

export const getSemanticColor = (color: SemanticRef) => {
  return `var(--color-${color.groupKey}-${color.colorKey})`;
};

export const getTypographyCss = (typography: TypographyRef): CSSProperties => {
  return {
    fontSize: `var(--typography-font-size-${typography.sizeKey});`,
    fontWeight: `var(--typography-font-weight-${typography.variantKey});`,
    lineHeight: `var(--typography-line-height-${typography.sizeKey});`,
    letterSpacing: `var(--typography-letter-spacing-${typography.sizeKey}-${typography.variantKey});`,
  };
};
