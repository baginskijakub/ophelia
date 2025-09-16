import { dynamicConfig } from "../../config";

/**
 * Dynamic stuff for a button that's gonna be configured in the ui
 */
export type ButtonSize = (typeof dynamicConfig.components.button.size)[number];
export type ButtonVariant =
  (typeof dynamicConfig.components.button.variant)[number];

export const DEFAULTS = {
  size: "md",
  variant: "solid",
};
