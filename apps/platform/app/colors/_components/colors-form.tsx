import { ColorsConfig } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useThemeForm } from "../../_components";

interface ColorsFormProps extends PropsWithChildren {}

interface ColorsFormValues {
  semantics: ColorsConfig["semantics"];
  primitives: ColorsConfig["primitives"];
  updateSemantics: (semantics: ColorsConfig["semantics"]) => void;
  updatePrimitives: (primitives: ColorsConfig["primitives"]) => void;
  layer: keyof ColorsConfig;
  selectLayer: (layer: keyof ColorsConfig) => void;
}

const ColorsFormContext = createContext<ColorsFormValues>(
  {} as ColorsFormValues,
);

export const ColorsFormProvider = (props: ColorsFormProps) => {
  const { children } = props;

  const { theme, updateTheme } = useThemeForm();
  const { semantics, primitives } = theme.colors;
  const [layer, setLayer] = useState<keyof ColorsConfig>("semantics");

  const updateSemantics = (newSemantics: ColorsConfig["semantics"]) => {
    updateTheme({
      ...theme,
      colors: {
        ...theme.colors,
        semantics: newSemantics,
      },
    });
  };

  const updatePrimitives = (newPrimitives: ColorsConfig["primitives"]) => {
    updateTheme({
      ...theme,
      colors: {
        ...theme.colors,
        primitives: newPrimitives,
      },
    });
  };

  return (
    <ColorsFormContext.Provider
      value={{
        semantics,
        updateSemantics,
        primitives,
        updatePrimitives,
        layer,
        selectLayer: setLayer,
      }}
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
