import { ColorsConfig, ThemeConfig } from "@repo/types";
import { createContext, PropsWithChildren } from "react";
import { useThemeForm } from "../../_components";

interface ColorsFormProps extends PropsWithChildren {}

interface ColorsFormValues {
  semantics: ColorsConfig["semantics"];
  primitives: ColorsConfig["primitives"];
}

const ColorsFormContext = createContext<ColorsFormValues>(
  {} as ColorsFormValues,
);

export const ColorsFormProvider = (props: ColorsFormProps) => {
  const { children } = props;

  const { theme } = useThemeForm();
  const { semantics, primitives } = theme.colors;

  return (
    <ColorsFormContext.Provider value={{ semantics, primitives }}>
      {children}
    </ColorsFormContext.Provider>
  );
};

export const useColorsForm = () => {
  const context = ColorsFormContext;

  if (!context) {
    throw new Error("useColorsForm must be used within a ColorsFormProvider");
  }

  return context;
};
