import React, { CSSProperties } from "react";
import { ButtonDynamicProperties } from "@repo/types";
import {
  getBorderCss,
  getPixelValue,
  getSemanticColor,
  getTypographyCss,
} from "@platform/utils";

interface ButtonPreviewProps {
  properties: ButtonDynamicProperties;
}

export const ButtonPreview = (props: ButtonPreviewProps) => {
  const { properties } = props;

  const {
    background: buttonBackground,
    border: buttonBorder,
    color,
    horizontalPadding,
    height,
    borderRadius,
    typography,
  } = properties;

  const dynamicStyles: CSSProperties = {
    backgroundColor: buttonBackground && getSemanticColor(buttonBackground),

    color: color && getSemanticColor(color),

    border: buttonBorder && getBorderCss(buttonBorder),

    paddingLeft: getPixelValue(horizontalPadding),
    paddingRight: getPixelValue(horizontalPadding),
    height: getPixelValue(height),

    borderRadius: getPixelValue(borderRadius),

    ...getTypographyCss(typography),
  };

  return <button style={dynamicStyles}>Get started</button>;
};
