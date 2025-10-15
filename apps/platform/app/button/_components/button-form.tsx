import { ComponentsConfig } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useConfigForm } from "../../_components/config-form";

interface ButtonFormProps extends PropsWithChildren {}

interface ButtonFormValues {
  buttons: ComponentsConfig["button"];
  selectedEntity?: SelectedEntity;
  selectEntity: (entity: SelectedEntity) => void;
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

  const { config } = useConfigForm();

  const [selectedEntity, setSelectedEntity] = useState<SelectedEntity>();

  const selectEntity = (entity: SelectedEntity) => {
    setSelectedEntity(entity);
  };

  return (
    <ButtonFormContext.Provider
      value={{
        buttons: config.components.button,
        selectedEntity,
        selectEntity,
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
