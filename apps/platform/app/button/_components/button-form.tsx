import { ColorsConfig } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useThemeForm } from "../../_components";

interface ButtonFormProps extends PropsWithChildren {}

interface ButtonFormValues {
  semantics: ColorsConfig["semantics"];
  primitives: ColorsConfig["primitives"];
  updateSemantics: (semantics: ColorsConfig["semantics"]) => void;
  updatePrimitives: (primitives: ColorsConfig["primitives"]) => void;
  layer: keyof ColorsConfig;
  selectLayer: (layer: keyof ColorsConfig) => void;
}

const ButtonFormContext = createContext<ButtonFormValues>(
  {} as ButtonFormValues,
);

export const ButtonFormProvider = (props: ButtonFormProps) => {
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
    <ButtonFormContext.Provider
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
    </ButtonFormContext.Provider>
  );
};

export const useButtonForm = () => {
  const context = useContext(ButtonFormContext);

  if (!context) {
    throw new Error("useButtonForm must be used within a ButtonFormProvider");
  }

  return context;
};
