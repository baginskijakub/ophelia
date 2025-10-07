import { ColorsConfig } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useColorsForm } from "../colors-form";

interface SemanticsFormProps extends PropsWithChildren {}

interface SelectedColor {
  semanticGroup: string;
  colorKey: string;
  value: string;
}

interface SemanticsFormValues {
  colors: ColorsConfig["semantics"];
  selectedColor: SelectedColor | undefined;
  handleSelectColor: (semanticGroup: string, colorKey: string) => void;
}

const SemanticsFormContext = createContext<SemanticsFormValues>(
  {} as SemanticsFormValues,
);

export const SemanticsFormProvider = (props: SemanticsFormProps) => {
  const { children } = props;

  const { semantics } = useColorsForm();

  const [selectedColor, setSelectedColor] = useState<SelectedColor>();

  const handleSelectColor = (semanticGroup: string, colorKey: string) => {
    const group = semantics.find((sem) => sem.key === semanticGroup);

    if (!group) return;

    const semanticColor = group.values.find((col) => col.key === colorKey);

    if (!semanticColor) return;

    setSelectedColor({
      semanticGroup,
      colorKey,
      value: semanticColor.primitiveRef.value,
    });
  };

  return (
    <SemanticsFormContext.Provider
      value={{ colors: semantics, selectedColor, handleSelectColor }}
    >
      {children}
    </SemanticsFormContext.Provider>
  );
};

export const useSemanticsForm = () => {
  const context = useContext(SemanticsFormContext);

  if (!context) {
    throw new Error(
      "useSemanticsForm must be used within a SemanticsFormProvider",
    );
  }

  return context;
};
