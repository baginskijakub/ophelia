import { ColorsConfig, PrimitiveShade } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useColorsForm } from "../colors-form";

interface PrimitivesFormProps extends PropsWithChildren {}

interface SelectedColor {
  groupKey: string;
  shade: keyof PrimitiveShade;
  value: string;
}

interface PrimitivesFormValues {
  colors: ColorsConfig["primitives"];
  selectedColor: SelectedColor | undefined;
  handleSelectColor: (groupKey: string, shade: keyof PrimitiveShade) => void;
  handleChangeColorValue: (newColor: string) => void;
  handleChangePrimitiveGroupKey: (newKey: string) => void;
  blurColor: () => void;
}

const PrimitivesFormContext = createContext<PrimitivesFormValues>(
  {} as PrimitivesFormValues,
);

export const PrimitivesFormProvider = (props: PrimitivesFormProps) => {
  const { children } = props;

  const { primitives, updatePrimitives } = useColorsForm();

  const [selectedColor, setSelectedColor] = useState<SelectedColor>();

  const handleSelectColor = (groupKey: string, shade: keyof PrimitiveShade) => {
    const group = primitives.find((prim) => prim.key === groupKey);

    const value = group?.values[shade];

    if (!group || !value) return;

    setSelectedColor({
      groupKey,
      shade,
      value,
    });
  };

  const blurColor = () => {
    setSelectedColor(undefined);
  };

  const handleChangeColorValue = (newColor: string) => {
    if (!selectedColor) return;

    const updatedPrimitives = primitives.map((group) => {
      if (group.key !== selectedColor.groupKey) return group;

      return {
        ...group,
        values: {
          ...group.values,
          [selectedColor.shade]: newColor,
        },
      };
    });

    updatePrimitives(updatedPrimitives);

    setSelectedColor({
      ...selectedColor,
      value: newColor,
    });
  };

  const handleChangePrimitiveGroupKey = (newKey: string) => {
    if (!selectedColor) return;

    const isKeyTaken = primitives.some(
      (group) => group.key === newKey && group.key !== selectedColor.groupKey,
    );

    if (isKeyTaken) {
      alert("This key is already taken. Please choose another one.");
      return;
    }

    const updatedPrimitives = primitives.map((group) => {
      if (group.key !== selectedColor.groupKey) return group;

      return {
        ...group,
        key: newKey,
      };
    });

    updatePrimitives(updatedPrimitives);

    setSelectedColor({
      ...selectedColor,
      groupKey: newKey,
    });
  };

  return (
    <PrimitivesFormContext.Provider
      value={{
        colors: primitives,
        selectedColor,
        handleSelectColor,
        handleChangeColorValue,
        handleChangePrimitiveGroupKey,
        blurColor,
      }}
    >
      {children}
    </PrimitivesFormContext.Provider>
  );
};

export const usePrimitivesForm = () => {
  const context = useContext(PrimitivesFormContext);

  if (!context) {
    throw new Error(
      "usePrimitivesForm must be used within a PrimitivesFormProvider",
    );
  }

  return context;
};
