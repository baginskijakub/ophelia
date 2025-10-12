import { ColorsConfig, PrimitiveRef } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useColorsForm } from "../colors-form";

interface SemanticsFormProps extends PropsWithChildren {}

interface SelectedColor {
  semanticGroup: string;
  colorKey: string;
  primitiveRef: PrimitiveRef;
}

interface SemanticsFormValues {
  colors: ColorsConfig["semantics"];
  selectedColor: SelectedColor | undefined;
  handleSelectColor: (semanticGroup: string, colorKey: string) => void;
  handleSemanticGroupKeyChange: (newKey: string) => void;
  handleColorKeyChange: (newKey: string) => void;
  handleColorValueChange: (ref: PrimitiveRef) => void;
  blurColor: () => void;
}

const SemanticsFormContext = createContext<SemanticsFormValues>(
  {} as SemanticsFormValues,
);

export const SemanticsFormProvider = (props: SemanticsFormProps) => {
  const { children } = props;

  const { semantics, updateSemantics } = useColorsForm();

  const [selectedColor, setSelectedColor] = useState<SelectedColor>();

  const handleSelectColor = (semanticGroup: string, colorKey: string) => {
    const group = semantics.find((sem) => sem.key === semanticGroup);

    if (!group) return;

    const semanticColor = group.values.find((col) => col.key === colorKey);

    if (!semanticColor) return;

    setSelectedColor({
      semanticGroup,
      colorKey,
      primitiveRef: semanticColor.primitiveRef,
    });
  };

  const blurColor = () => {
    setSelectedColor(undefined);
  };

  const handleSemanticGroupKeyChange = (newKey: string) => {
    if (!selectedColor) return;

    const updatedSemantics = semantics.map((group) => {
      if (group.key !== selectedColor.semanticGroup) return group;

      return {
        ...group,
        key: newKey,
      };
    });

    updateSemantics(updatedSemantics);

    setSelectedColor({
      ...selectedColor,
      semanticGroup: newKey,
    });
  };

  const handleColorKeyChange = (newKey: string) => {
    if (!selectedColor) return;

    const updatedSemantics = semantics.map((group) => {
      if (group.key !== selectedColor.semanticGroup) return group;

      return {
        ...group,
        values: group.values.map((color) => {
          if (color.key !== selectedColor.colorKey) return color;

          return {
            ...color,
            key: newKey,
          };
        }),
      };
    });

    updateSemantics(updatedSemantics);

    setSelectedColor({
      ...selectedColor,
      colorKey: newKey,
    });
  };

  const handleColorValueChange = (ref: PrimitiveRef) => {
    if (!selectedColor) return;

    const updatedSemantics = semantics.map((group) => {
      if (group.key !== selectedColor.semanticGroup) return group;

      return {
        ...group,
        values: group.values.map((color) => {
          if (color.key !== selectedColor.colorKey) return color;
          return {
            ...color,
            primitiveRef: ref,
          };
        }),
      };
    });

    updateSemantics(updatedSemantics);

    setSelectedColor({
      ...selectedColor,
      primitiveRef: ref,
    });
  };

  return (
    <SemanticsFormContext.Provider
      value={{
        colors: semantics,
        selectedColor,
        handleSelectColor,
        handleSemanticGroupKeyChange,
        handleColorKeyChange,
        handleColorValueChange,
        blurColor,
      }}
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
