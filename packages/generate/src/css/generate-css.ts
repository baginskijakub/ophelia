import { Config, ThemeConfig } from "../types";
import { ColorsConfig } from "../types/colors";

export const generateCSS = (config: Config): string => {
  const { themes, typography } = config;

  let accumulatedCSS = "";

  themes.forEach((theme) => {
    accumulatedCSS += generateThemeCSS(theme);
  });

  accumulatedCSS += `:root {\n${generateTypography(typography)}\n}\n`;

  return accumulatedCSS;
};

const generateThemeCSS = (theme: ThemeConfig): string => {
  const { colors } = theme;
  const { primitives, semantics } = colors;

  let themeCSS = "";

  const primitivesVars = generatePrimitives(primitives);
  const semanticsVars = generateSemantics(semantics);

  themeCSS += `:root {\n${primitivesVars}\n${semanticsVars}\n}\n\n`;

  return themeCSS;
};

const generatePrimitives = (primitives: ColorsConfig["primitives"]): string => {
  let css = "";

  primitives.forEach((group) => {
    const { values, key } = group;

    Object.entries(values).forEach(([shade, value]) => {
      css += `  --color-${key}-${shade}: ${value};\n`;
    });

    css += "\n";
  });

  return css;
};

const generateSemantics = (semantics: ColorsConfig["semantics"]): string => {
  let css = "";

  semantics.forEach((group) => {
    const { key: groupKey, values } = group;

    values.forEach((color) => {
      const { key, primitiveRef } = color;
      css += `  --color-${groupKey}-${key}: var(--color-${primitiveRef.key}-${primitiveRef.shade});\n`;
    });
  });

  return css;
};

const generateTypography = (typographyConfig: Config["typography"]): string => {
  let css = "";

  typographyConfig.sizes.forEach((size) => {
    const { key: sizeKey, fontSize, lineHeight } = size;

    css += `  --typography-font-size-${sizeKey}: ${fontSize};\n`;
    css += `  --typography-line-height-${sizeKey}: ${lineHeight};\n`;
  });

  typographyConfig.variants.forEach((variant) => {
    const { key: variantKey, fontWeight } = variant;

    css += `  --typography-font-weight-${variantKey}: ${fontWeight};\n`;
  });

  typographyConfig.sizeVariantIntersections.forEach((intersection) => {
    const { sizeKey, variantKey, letterSpacing } = intersection;

    css += `  --typography-letter-spacing-${sizeKey}-${variantKey}: ${letterSpacing};\n`;
  });

  return css;
};
