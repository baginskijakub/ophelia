"use client";

import React from "react";
import {
  ButtonDynamicProperties,
  SemanticRef,
  TypographyRef,
} from "@repo/types";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  config: ButtonDynamicProperties;
}

export function Button(props: ButtonProps): React.ReactNode {
  const { config, children } = props;

  const styles = createButtonStyle(config);

  return <button style={styles.baseStyle}>{children}</button>;
}

export const getSemanticCssVar = (semanticRef: SemanticRef): string => {
  return `var(--${semanticRef.groupKey}-${semanticRef.colorKey})`;
};

export const getTypographyCssVars = (
  typographyRef: TypographyRef,
): {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  letterSpacing: string;
} => {
  const { sizeKey, variantKey } = typographyRef;
  return {
    fontSize: `var(--font-size-${sizeKey})`,
    lineHeight: `var(--line-height-${sizeKey})`,
    fontWeight: `var(--font-weight-${variantKey})`,
    letterSpacing: `var(--letter-spacing-${sizeKey}-${variantKey})`,
  };
};

export const createButtonStyle = (
  buttonConfig: ButtonDynamicProperties,
): {
  baseStyle: React.CSSProperties;
  hoverStyle: React.CSSProperties;
  focusStyle: React.CSSProperties;
} => {
  const backgroundVar = getSemanticCssVar(buttonConfig.background);
  const borderVar = getSemanticCssVar(buttonConfig.border.color);
  const typographyVars = getTypographyCssVars(buttonConfig.typography);

  const hoverBackgroundVar = getSemanticCssVar(buttonConfig.hover.background);
  const hoverBorderVar = getSemanticCssVar(buttonConfig.hover.border.color);
  const hoverTransition = `${buttonConfig.hover.transition.duration} ${buttonConfig.hover.transition.timingFunction}`;

  const focusBackgroundVar = getSemanticCssVar(buttonConfig.focus.background);
  const focusBorderVar = getSemanticCssVar(buttonConfig.focus.border.color);
  const focusOutlineVar = getSemanticCssVar(buttonConfig.focus.outline.color);
  const focusTransition = `${buttonConfig.focus.transition.duration} ${buttonConfig.focus.transition.timingFunction}`;

  const baseStyle: React.CSSProperties = {
    paddingLeft: buttonConfig.horizontalPadding,
    paddingRight: buttonConfig.horizontalPadding,
    height: buttonConfig.height,
    backgroundColor: backgroundVar,
    border: `${buttonConfig.border.width} solid ${borderVar}`,
    borderRadius: `${buttonConfig.borderRadius}px`,
    cursor: "pointer",
    boxSizing: "border-box",
    fontSize: typographyVars.fontSize,
    lineHeight: typographyVars.lineHeight,
    fontWeight: typographyVars.fontWeight,
    letterSpacing: typographyVars.letterSpacing,
    transition: `background-color ${hoverTransition}, border-color ${hoverTransition}, opacity ${hoverTransition}`,
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: hoverBackgroundVar,
    borderColor: hoverBorderVar,
    opacity: buttonConfig.hover.opacity,
  };

  const focusStyle: React.CSSProperties = {
    backgroundColor: focusBackgroundVar,
    borderColor: focusBorderVar,
    outline: `${buttonConfig.focus.outline.width} solid ${focusOutlineVar}`,
    outlineOffset: "2px",
    opacity: buttonConfig.focus.opacity,
  };

  return {
    baseStyle,
    hoverStyle,
    focusStyle,
  };
};
