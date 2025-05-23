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

export type TextProps<T extends React.ElementType> = {
  as?: T;
  role: TextRole;
  size: TextSizeMap[TextRole];
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
      return "label";
    default:
      return "span";
  }
};
