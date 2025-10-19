import { cx } from "@platform/utils";
import { ButtonPreview } from "./button-preview";
import { useButtonForm } from "./button-form";
import { useMemo } from "react";
import { ButtonDynamicProperties } from "@repo/types";

interface ButtonControl {
  variantIndex: number;
  variantKey: string;
  sizeIndex: number;
  sizeKey: string;
}

export const BUTTON_CONTROL_HEIGHT = "h-20";

export const ButtonControl = (props: ButtonControl) => {
  const { variantIndex, variantKey, sizeIndex, sizeKey } = props;

  const { buttons, selectedEntity, selectEntity } = useButtonForm();

  const isSelected =
    selectedEntity?.type === "button" &&
    selectedEntity?.variantIndex === variantIndex &&
    selectedEntity?.sizeIndex === sizeIndex;

  const isSizeSelected =
    selectedEntity?.type === "size" && selectedEntity?.sizeIndex === sizeIndex;

  const isLast = variantIndex === buttons.variants.length - 1;

  const properties: ButtonDynamicProperties = useMemo(() => {
    return {
      ...buttons.variants[variantIndex],
      ...buttons.sizes[sizeIndex],
      ...buttons.sizeVariantIntersection.find(
        (intersection) =>
          intersection.sizeKey === sizeKey &&
          intersection.variantKey === variantKey,
      ),
    } as ButtonDynamicProperties;
  }, [sizeIndex, variantIndex, sizeKey, variantKey, buttons]);

  return (
    <div
      className={cx(
        BUTTON_CONTROL_HEIGHT,
        "flex items-center justify-center",
        "px-4 rounded-md",
        "hitbox",
        isSelected && "focus-ring",
        isSizeSelected && "focus-ring-tb rounded-none",
        isSizeSelected &&
          isLast &&
          "focus-ring-trb rounded-l-none rounded-r-md",
      )}
      onClick={() =>
        selectEntity({
          type: "button",
          variantIndex,
          variantKey,
          sizeIndex,
          sizeKey,
        })
      }
    >
      <ButtonPreview properties={properties} />
    </div>
  );
};
