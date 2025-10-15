import {
  ColorsConfig,
  PrimitiveRef,
  SemanticColor,
  SemanticGroup,
} from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useColorsForm } from "../colors-form";

interface SemanticsFormProps extends PropsWithChildren {}

type SelectedEntity =
  | {
      type: "color";
      groupIndex: number;
      groupKey: string;
      colorIndex: number;
      colorKey: string;
      primitiveRef: PrimitiveRef;
    }
  | {
      type: "group";
      groupIndex: number;
      groupKey: string;
    };

interface SemanticsFormValues {
  colors: ColorsConfig["semantics"];
  selectedEntity: SelectedEntity | undefined;
  select: (entity: SelectedEntity) => void;
  handleSemanticGroupKeyChange: (newKey: string) => void;
  handleColorKeyChange: (newKey: string) => void;
  handleColorValueChange: (ref: PrimitiveRef) => void;
  handleDeleteColor: () => void;
  handleAddColor: (groupIndex: number) => void;
  handleDeleteSemanticGroup: () => void;
  handleAddSemanticGroup: () => void;
  blurColor: () => void;
}

const SemanticsFormContext = createContext<SemanticsFormValues>(
  {} as SemanticsFormValues,
);

export const SemanticsFormProvider = (props: SemanticsFormProps) => {
  const { children } = props;

  const { semantics, primitives, updateSemantics } = useColorsForm();

  const [selectedEntity, setSelectedEntity] = useState<SelectedEntity>();

  const select = (entity: SelectedEntity) => {
    setSelectedEntity(entity);
  };

  const blurColor = () => {
    setSelectedEntity(undefined);
  };

  const handleSemanticGroupKeyChange = (newKey: string) => {
    if (!selectedEntity) return;

    const updatedSemantics = semantics.map((group, idx) => {
      if (idx !== selectedEntity.groupIndex) return group;

      return {
        ...group,
        key: newKey,
      };
    });

    updateSemantics(updatedSemantics);

    setSelectedEntity({
      ...selectedEntity,
      groupKey: newKey,
    });
  };

  const handleColorKeyChange = (newKey: string) => {
    if (!selectedEntity || selectedEntity.type !== "color") return;

    const updatedSemantics = semantics.map((group, idx) => {
      if (idx !== selectedEntity.groupIndex) return group;

      return {
        ...group,
        values: group.values.map((color, idx) => {
          if (idx !== selectedEntity.colorIndex) return color;

          return {
            ...color,
            key: newKey,
          };
        }),
      };
    });

    updateSemantics(updatedSemantics);

    setSelectedEntity({
      ...selectedEntity,
      colorKey: newKey,
    });
  };

  const handleColorValueChange = (ref: PrimitiveRef) => {
    if (!selectedEntity || selectedEntity.type !== "color") return;

    const updatedSemantics = semantics.map((group, idx) => {
      if (idx !== selectedEntity.groupIndex) return group;

      return {
        ...group,
        values: group.values.map((color) => {
          if (color.key !== selectedEntity.colorKey) return color;
          return {
            ...color,
            primitiveRef: ref,
          };
        }),
      };
    });

    updateSemantics(updatedSemantics);

    setSelectedEntity({
      ...selectedEntity,
      primitiveRef: ref,
    });
  };

  const handleDeleteColor = () => {
    if (!selectedEntity || selectedEntity.type !== "color") return;

    const updatedSemantics = semantics.map((group, idx) => {
      if (idx !== selectedEntity.groupIndex) return group;

      return {
        ...group,
        values: group.values.filter(
          (_, idx) => idx !== selectedEntity.colorIndex,
        ),
      };
    });

    updateSemantics(updatedSemantics);

    setSelectedEntity(undefined);
  };

  const handleAddColor = (groupIndex: number) => {
    const updatedSemantics = semantics.map((group, idx) => {
      if (idx !== groupIndex) return group;

      if (!primitives[0]) return group;

      const newColor: SemanticColor = {
        key: `primary`,
        primitiveRef: {
          value: primitives[0].values[500],
          key: primitives[0].key,
          shade: 500,
        },
      };

      return {
        ...group,
        values: [...group.values, newColor],
      };
    });

    updateSemantics(updatedSemantics);
  };

  const handleDeleteSemanticGroup = () => {
    if (!selectedEntity) return;

    const updatedSemantics = semantics.filter(
      (_, idx) => idx !== selectedEntity.groupIndex,
    );

    updateSemantics(updatedSemantics);

    setSelectedEntity(undefined);
  };

  const handleAddSemanticGroup = () => {
    const toCopy = semantics[semantics.length - 1];

    // check if can be copied
    if (semantics.length > 0 && toCopy) {
      const updatedSemantics = [...semantics, toCopy];

      updateSemantics(updatedSemantics);
      return;
    }

    // if not, create a new one
    const newGroupKey = `background`;

    const groupValues: SemanticGroup["values"] = primitives[0]
      ? [
          {
            primitiveRef: {
              value: primitives[0].values[500],
              key: primitives[0].key,
              shade: 500,
            },
            key: "primary",
          },
        ]
      : [];

    const updatedSemantics = [
      ...semantics,
      {
        key: newGroupKey,
        values: groupValues,
      },
    ];

    updateSemantics(updatedSemantics);
  };

  return (
    <SemanticsFormContext.Provider
      value={{
        colors: semantics,
        selectedEntity,
        select,
        handleSemanticGroupKeyChange,
        handleColorKeyChange,
        handleColorValueChange,
        blurColor,
        handleDeleteColor,
        handleAddColor,
        handleDeleteSemanticGroup,
        handleAddSemanticGroup,
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
