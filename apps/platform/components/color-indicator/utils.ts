// Function to convert hex to RGB
const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result || !result[1] || !result[2] || !result[3]) {
    return null;
  }

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// Function to convert RGB to sRGB linear color space
const srgbToLinear = (c: number): number => {
  c /= 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};

// Function to calculate relative luminance
const getLuminance = (color: string): number | null => {
  const rgb = hexToRgb(color); // Assuming input is hex for now

  if (!rgb) {
    console.warn(`Could not parse color: ${color}. Returning null luminance.`);
    return null;
  }

  const r = srgbToLinear(rgb.r);
  const g = srgbToLinear(rgb.g);
  const b = srgbToLinear(rgb.b);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const getContrastRatio = (
  color1: string,
  color2: string,
): number | null => {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);

  if (lum1 === null || lum2 === null) {
    return null;
  }

  const L1 = Math.max(lum1, lum2);
  const L2 = Math.min(lum1, lum2);

  return (L1 + 0.05) / (L2 + 0.05);
};
