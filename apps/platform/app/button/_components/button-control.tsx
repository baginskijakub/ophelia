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

  const { buttons } = useButtonForm();

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
      )}
    >
      <ButtonPreview properties={properties} />
    </div>
  );
};
