import {
  ButtonConfig,
  ButtonSize,
  ButtonSizeVariantIntersection,
  ButtonVariant,
} from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useConfigForm } from "../../_components/config-form";

interface ButtonFormProps extends PropsWithChildren {}

interface ButtonFormValues {
  buttons: ButtonConfig;
  selectedEntity?: SelectedEntity;
  selectEntity: (entity: SelectedEntity) => void;
  onVariantOrderChange: (newOrder: string[]) => void;
  onSizeOrderChange: (newOrder: string[]) => void;
  updateSize: (newSize: ButtonSize) => void;
  updateVariant: (newVariant: ButtonVariant) => void;
  updateButtonIntersection: (newValues: ButtonSizeVariantIntersection) => void;
}

type SelectedEntity =
  | {
      type: "button";
      variantIndex: number;
      variantKey: string;
      sizeIndex: number;
      sizeKey: string;
    }
  | {
      type: "variant";
      variantIndex: number;
      variantKey: string;
    }
  | {
      type: "size";
      sizeIndex: number;
      sizeKey: string;
    };

const ButtonFormContext = createContext<ButtonFormValues>(
  {} as ButtonFormValues,
);

export const ButtonFormProvider = (props: ButtonFormProps) => {
  const { children } = props;

  const { config, updateConfig } = useConfigForm();

  const [selectedEntity, setSelectedEntity] = useState<SelectedEntity>();

  const selectEntity = (entity: SelectedEntity) => {
    setSelectedEntity(entity);
  };

  const updateSize = (newSize: ButtonSize) => {
    if (!selectedEntity) {
      return;
    }

    if (selectedEntity.type !== "size" && selectedEntity.type !== "button") {
      return;
    }

    const newSizes = [...config.components.button.sizes];
    newSizes[selectedEntity.sizeIndex] = newSize;

    updateConfig({
      ...config,
      components: {
        ...config.components,
        button: {
          ...config.components.button,
          sizes: newSizes,
        },
      },
    });
  };

  const updateVariant = (newVariant: ButtonVariant) => {
    if (!selectedEntity) {
      return;
    }

    if (selectedEntity.type !== "variant" && selectedEntity.type !== "button") {
      return;
    }

    const newVariants = [...config.components.button.variants];
    newVariants[selectedEntity.variantIndex] = newVariant;

    updateConfig({
      ...config,
      components: {
        ...config.components,
        button: {
          ...config.components.button,
          variants: newVariants,
        },
      },
    });
  };

  const updateButtonIntersection = (
    newValues: ButtonSizeVariantIntersection,
  ) => {
    if (!selectedEntity) {
      return;
    }

    if (selectedEntity.type !== "button") {
      return;
    }

    const newIntersections = [
      ...config.components.button.sizeVariantIntersection,
    ];
    const intersectionIndex = newIntersections.findIndex(
      (intersection) =>
        intersection.sizeKey === selectedEntity.sizeKey &&
        intersection.variantKey === selectedEntity.variantKey,
    );

    if (intersectionIndex !== -1) {
      newIntersections[intersectionIndex] = newValues;
    } else {
      newIntersections.push(newValues);
    }

    updateConfig({
      ...config,
      components: {
        ...config.components,
        button: {
          ...config.components.button,
          sizeVariantIntersection: newIntersections,
        },
      },
    });
  };

  const onVariantOrderChange = (newOrder: string[]) => {
    const orderedVariants = newOrder
      .map((key) =>
        config.components.button.variants.find(
          (variant) => variant.key === key,
        ),
      )
      .filter((variant): variant is ButtonVariant => variant !== undefined);

    updateConfig({
      ...config,
      components: {
        ...config.components,
        button: {
          ...config.components.button,
          variants: orderedVariants,
        },
      },
    });
  };

  const onSizeOrderChange = (newOrder: string[]) => {
    const orderedSizes = newOrder
      .map((key) =>
        config.components.button.sizes.find((size) => size.key === key),
      )
      .filter((size): size is ButtonSize => size !== undefined);

    updateConfig({
      ...config,
      components: {
        ...config.components,
        button: {
          ...config.components.button,
          sizes: orderedSizes,
        },
      },
    });
  };

  return (
    <ButtonFormContext.Provider
      value={{
        buttons: config.components.button,
        selectedEntity,
        selectEntity,
        onVariantOrderChange,
        onSizeOrderChange,
        updateSize,
        updateVariant,
        updateButtonIntersection,
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
