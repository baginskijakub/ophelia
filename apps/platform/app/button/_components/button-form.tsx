import {
  ButtonConfig,
  ButtonSize,
  ButtonSizeVariantIntersection,
  ButtonVariant,
} from "@repo/types";
import { createContext, PropsWithChildren, useContext } from "react";
import { useConfigForm } from "../../_components/config-form";
import { UseEntitySelector, useEntitySelector } from "@platform/hooks";

interface ButtonFormProps extends PropsWithChildren {}

interface ButtonFormValues extends UseEntitySelector {
  buttons: ButtonConfig;
  onVariantOrderChange: (newOrder: string[]) => void;
  onSizeOrderChange: (newOrder: string[]) => void;
  updateSize: (newSize: ButtonSize) => void;
  updateVariant: (newVariant: ButtonVariant) => void;
  updateButtonIntersection: (newValues: ButtonSizeVariantIntersection) => void;
}

const ButtonFormContext = createContext<ButtonFormValues>(
  {} as ButtonFormValues,
);

export const ButtonFormProvider = (props: ButtonFormProps) => {
  const { children } = props;

  const { config, updateConfig } = useConfigForm();
  const { selectedEntity, selectEntity } = useEntitySelector();

  const updateSize = (newSize: ButtonSize) => {
    if (!selectedEntity) {
      return;
    }

    if (selectedEntity.type !== "row" && selectedEntity.type !== "cell") {
      return;
    }

    const newSizes = [...config.components.button.sizes];
    newSizes[selectedEntity.rowIndex] = newSize;

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

    if (selectedEntity.type !== "column" && selectedEntity.type !== "cell") {
      return;
    }

    const newVariants = [...config.components.button.variants];
    newVariants[selectedEntity.columnIndex] = newVariant;

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

    if (selectedEntity.type !== "cell") {
      return;
    }

    const newIntersections = [
      ...config.components.button.sizeVariantIntersection,
    ];
    const intersectionIndex = newIntersections.findIndex(
      (intersection) =>
        intersection.sizeKey === selectedEntity.rowId &&
        intersection.variantKey === selectedEntity.columnId,
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
