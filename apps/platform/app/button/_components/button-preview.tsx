import React, { CSSProperties } from "react";
import { ButtonDynamicProperties } from "@repo/types";
import { CSS } from "@platform/utils";

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
    backgroundColor: buttonBackground && CSS.getColor(buttonBackground),

    color: color && CSS.getColor(color),

    border: buttonBorder && CSS.getBorder(buttonBorder),

    paddingLeft: CSS.getPixelValue(horizontalPadding),
    paddingRight: CSS.getPixelValue(horizontalPadding),
    height: CSS.getPixelValue(height),

    borderRadius: CSS.getPixelValue(borderRadius),

    ...CSS.getTypography(typography),
  };

  return <button style={dynamicStyles}>Get started</button>;
};
