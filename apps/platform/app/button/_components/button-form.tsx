import { ButtonConfig } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useThemeForm } from "../../_components";

interface ButtonFormProps extends PropsWithChildren {}

interface ButtonFormValues {
  semantics: ButtonConfig["semantics"];
  primitives: ButtonConfig["primitives"];
  updateSemantics: (semantics: ButtonConfig["semantics"]) => void;
  updatePrimitives: (primitives: ButtonConfig["primitives"]) => void;
  layer: keyof ButtonConfig;
  selectLayer: (layer: keyof ButtonConfig) => void;
}

const ButtonFormContext = createContext<ButtonFormValues>(
  {} as ButtonFormValues,
);

export const ButtonFormProvider = (props: ButtonFormProps) => {
  const { children } = props;

  const { theme, updateTheme } = useThemeForm();
  const { semantics, primitives } = theme;
  const [layer, setLayer] = useState<keyof ButtonConfig>("semantics");

  const updateSemantics = (newSemantics: ButtonConfig["semantics"]) => {
    updateTheme({
      ...theme,
      colors: {
        ...theme.colors,
        semantics: newSemantics,
      },
    });
  };

  const updatePrimitives = (newPrimitives: ButtonConfig["primitives"]) => {
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
