import { Branding } from "../types";

function hslToHex(h: number, s: number, l: number): string {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function getContrastColor(hexcolor: string): string {
    const r = parseInt(hexcolor.substring(1, 3), 16);
    const g = parseInt(hexcolor.substring(3, 5), 16);
    const b = parseInt(hexcolor.substring(5, 7), 16);

    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;

    return luminance > 0.5 ? "#000000" : "#ffffff";
}

type BrandingColorPrimitive = 10 | 30 | 50 | 70 | 80 | 90

export const mapBranding = (branding: Branding) => {
  const cssVars: Record<string, string> = {};
  const baseHue = branding.color.hue; 

  const KEY_MAP: BrandingColorPrimitive[] = [10,30,50,70,80,90]
  const lightnessMap: Record<BrandingColorPrimitive, number> = {
    10: 96,  
    30: 90,  
    50: 35,  
    70: 25,  
    80: 20,  
    90: 15   
  };

  const saturationMap: Record<BrandingColorPrimitive, number> = {
    10: 50, 
    30: 60,
    50: 70,
    70: 80,
    80: 90, 
    90: 85  
  };


  for (const key of KEY_MAP) {
      const lightness = lightnessMap[key];
      const saturation = saturationMap[key]; 
      cssVars[`--brand-${key}`] = hslToHex(baseHue, saturation, lightness);
  }

  cssVars["--brand-contrast"] = getContrastColor(cssVars['--brand-80'] as string);

  cssVars["--bg-gradient"] = `linear-gradient(to bottom, transparent 0%, ${cssVars["--brand-10"]} 100%)`;

  if (!branding.rounding) {
    cssVars["--radii-sm"] = "0px";
    cssVars["--radii-md"] = "0px";
    cssVars["--radii-lg"] = "0px";
    cssVars["--radii-xl"] = "0px";
  }  


  return cssVars;
};
