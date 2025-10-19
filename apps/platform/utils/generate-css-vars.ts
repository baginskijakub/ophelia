import { ColorsConfig, Config, ThemeConfig } from "@repo/types";

export const generateCssVars = (config: Config): string => {
  const { themes } = config;

  let accumulatedCSS = "";

  themes.forEach((theme) => {
    accumulatedCSS += generateThemeCSS(theme);
  });

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
