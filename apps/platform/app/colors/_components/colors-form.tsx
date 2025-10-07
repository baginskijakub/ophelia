import { ColorsConfig, ThemeConfig } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useThemeForm } from "../../_components";

interface ColorsFormProps extends PropsWithChildren {}

interface ColorsFormValues {
  semantics: ColorsConfig["semantics"];
  primitives: ColorsConfig["primitives"];
  layer: keyof ColorsConfig;
  selectLayer: (layer: keyof ColorsConfig) => void;
}

const ColorsFormContext = createContext<ColorsFormValues>(
  {} as ColorsFormValues,
);

export const ColorsFormProvider = (props: ColorsFormProps) => {
  const { children } = props;

  const { theme } = useThemeForm();
  const { semantics, primitives } = theme.colors;
  const [layer, setLayer] = useState<keyof ColorsConfig>("semantics");

  return (
    <ColorsFormContext.Provider
      value={{ semantics, primitives, layer, selectLayer: setLayer }}
    >
      {children}
    </ColorsFormContext.Provider>
  );
};

export const useColorsForm = () => {
  const context = useContext(ColorsFormContext);

  if (!context) {
    throw new Error("useColorsForm must be used within a ColorsFormProvider");
  }

  return context;
};
