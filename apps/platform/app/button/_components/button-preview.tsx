import React, { CSSProperties } from "react";
import { ButtonDynamicProperties } from "@repo/types";
import {
  getBorderCss,
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
    horizontalPadding,
    height,
    borderRadius,
    typography,
  } = properties;

  const dynamicStyles: CSSProperties = {
    backgroundColor: getSemanticColor(buttonBackground),

    border: getBorderCss(buttonBorder),

    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    height: height,

    borderRadius: `${borderRadius}px`,

    ...getTypographyCss(typography),
  };

  return <button style={dynamicStyles}>Get started</button>;
};
