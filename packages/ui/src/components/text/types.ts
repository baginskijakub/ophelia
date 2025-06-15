import React from "react";

type TextRole = "display" | "heading" | "paragraph" | "label";

type TextSizeMap = {
  display: "sm" | "md" | "lg" | "xl";
  heading: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  paragraph: "sm" | "md" | "lg" | "xl";
  label: "sm" | "md" | "lg" | "xl";
};

export type TextColor =
  | "text-90"
  | "text-70"
  | "text-50"
  | "text-30"
  | "brand"
  | "brand-contrast";

export type TextAlign = "left" | "center" | "right" | "justify";

type TextSizeRole =
  | {
      role: "heading";
      size: TextSizeMap["heading"];
    }
  | {
      role: "label";
      size: TextSizeMap["label"];
    }
  | {
      role: "paragraph";
      size: TextSizeMap["paragraph"];
    }
  | {
      role: "display";
      size: TextSizeMap["display"];
    };

export type TextProps<T extends React.ElementType> = TextSizeRole & {
  as?: T;
  align?: TextAlign;
  color?: TextColor;
  className?: string;
} & React.ComponentPropsWithoutRef<T>;

export const tagMapper = (role: TextRole): React.ElementType => {
  switch (role) {
    case "display":
      return "h1";
    case "heading":
      return "h2";
    case "paragraph":
      return "p";
    case "label":
      return "p";
    default:
      return "span";
  }
};
