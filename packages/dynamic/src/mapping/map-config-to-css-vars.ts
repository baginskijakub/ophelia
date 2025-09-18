import { ColorsConfig, Config, ThemeConfig } from "@repo/types";

type CssVariables = Record<string, string>;
type ThemeCssVariables = Record<string, CssVariables>;

export const mapConfigToCssVars = (config: Config): ThemeCssVariables => {
  const { themes } = config;

  const allThemeCssVars: ThemeCssVariables = {};

  themes.forEach((theme) => {
    allThemeCssVars[theme.name] = generateThemeCssVars(theme);
  });

  return allThemeCssVars;
};

const generateThemeCssVars = (theme: ThemeConfig): CssVariables => {
  const { colors } = theme;
  const { primitives, semantics } = colors;

  let themeCssVars: CssVariables = {};

  const primitivesVars = generatePrimitivesVars(primitives);
  const semanticsVars = generateSemanticsVars(semantics);

  themeCssVars = { ...primitivesVars, ...semanticsVars };

  return themeCssVars;
};

const generatePrimitivesVars = (
  primitives: ColorsConfig["primitives"],
): CssVariables => {
  const cssVars: CssVariables = {};

  primitives.forEach((group) => {
    const { values, key } = group;

    Object.entries(values).forEach(([shade, value]) => {
      cssVars[`--color-${key}-${shade}`] = value;
    });
  });

  return cssVars;
};

const generateSemanticsVars = (
  semantics: ColorsConfig["semantics"],
): CssVariables => {
  const cssVars: CssVariables = {};

  semantics.forEach((group) => {
    const { key: groupKey, values } = group;

    values.forEach((color) => {
      const { key, primitiveRef } = color;
      cssVars[`--color-${groupKey}-${key}`] =
        `var(--color-${primitiveRef.key}-${primitiveRef.shade})`;
    });
  });

  return cssVars;
};
