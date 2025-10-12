import { ColorsConfig, PrimitiveShade, PrimitiveGroup } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useColorsForm } from "../colors-form";

const DEFAULT_PRIMITIVE_GROUP: PrimitiveGroup = {
  key: "",
  values: {
    100: "#f0f0f0",
    200: "#d9d9d9",
    300: "#bfbfbf",
    400: "#a6a6a6",
    500: "#8c8c8c",
    600: "#737373",
    700: "#595959",
    800: "#404040",
    900: "#262626",
  },
};

interface PrimitivesFormProps extends PropsWithChildren {}

type SelectedEntity =
  | {
      type: "color";
      groupKey: string;
      groupIndex: number;
      shade: keyof PrimitiveShade;
      value: string;
    }
  | {
      type: "group";
      groupKey: string;
      groupIndex: number;
    };

interface PrimitivesFormValues {
  colors: ColorsConfig["primitives"];
  selectedEntity: SelectedEntity | undefined;
  handleSelectEntity: (entity: SelectedEntity) => void;
  handleChangeColorValue: (newColor: string) => void;
  handleChangePrimitiveGroupKey: (newKey: string) => void;
  handleAddPrimitiveGroup: () => void;
  blurColor: () => void;
}

const PrimitivesFormContext = createContext<PrimitivesFormValues>(
  {} as PrimitivesFormValues,
);

export const PrimitivesFormProvider = (props: PrimitivesFormProps) => {
  const { children } = props;

  const { primitives, updatePrimitives } = useColorsForm();

  const [selectedEntity, setSelectedEntity] = useState<SelectedEntity>();

  const handleSelectEntity = (entity: SelectedEntity) => {
    setSelectedEntity(entity);
  };

  const blurColor = () => {
    setSelectedEntity(undefined);
  };

  const handleChangeColorValue = (newColor: string) => {
    if (!selectedEntity || selectedEntity.type !== "color") return;

    const updatedPrimitives = [...primitives];

    const primitiveToUpdate = updatedPrimitives[selectedEntity.groupIndex];

    if (!primitiveToUpdate) return;

    updatedPrimitives[selectedEntity.groupIndex] = {
      ...primitiveToUpdate,
      values: {
        ...primitiveToUpdate.values,
        [selectedEntity.shade]: newColor,
      },
    };

    updatePrimitives(updatedPrimitives);

    setSelectedEntity({
      ...selectedEntity,
      value: newColor,
    });
  };

  const handleChangePrimitiveGroupKey = (newKey: string) => {
    if (!selectedEntity) return;

    const updatedPrimitives = [...primitives];

    const primitiveToUpdate = updatedPrimitives[selectedEntity.groupIndex];

    if (!primitiveToUpdate) return;

    updatedPrimitives[selectedEntity.groupIndex] = {
      ...primitiveToUpdate,
      key: newKey,
    };

    updatePrimitives(updatedPrimitives);

    setSelectedEntity({
      ...selectedEntity,
      groupKey: newKey,
    });
  };

  const handleAddPrimitiveGroup = () => {
    let newGroupToAdd: PrimitiveGroup;

    const lastGroup = primitives[primitives.length - 1];

    if (lastGroup) {
      newGroupToAdd = {
        ...lastGroup,
      };
    } else {
      newGroupToAdd = { ...DEFAULT_PRIMITIVE_GROUP };
    }

    updatePrimitives([...primitives, newGroupToAdd]);
  };

  return (
    <PrimitivesFormContext.Provider
      value={{
        colors: primitives,
        selectedEntity,
        handleSelectEntity,
        handleChangeColorValue,
        handleChangePrimitiveGroupKey,
        handleAddPrimitiveGroup,
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
