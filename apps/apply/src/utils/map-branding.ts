import { Branding } from "../types";

export const mapBranding = (branding: Branding) => {
  const cssVars: Record<string, string> = {};

  for (const [key, value] of Object.entries(branding.colors)) {
    cssVars[`--brand-${key}`] = value;
  }

  cssVars["--bg-gradient"] = `linear-gradient(to bottom, transparent 0%, ${branding.colors[10]} 100%)`;

  if (!branding.rounding) {
    cssVars["--radii-sm"] = "0px";
    cssVars["--radii-md"] = "0px";
    cssVars["--radii-lg"] = "0px";
    cssVars["--radii-xl"] = "0px";
  }

  return cssVars;
};