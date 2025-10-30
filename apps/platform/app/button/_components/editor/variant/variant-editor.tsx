import { Badge, CanvasDrawer } from "@platform/components";
import { useButtonForm } from "../../button-form";
import { BackgroundInput } from "./background-input";
import { useMemo } from "react";
import { ColorRef } from "@repo/types";

export const VariantEditor = () => {
  const { buttons, selectedEntity, updateVariant } = useButtonForm();

  const buttonVariant = useMemo(() => {
    if (!selectedEntity || selectedEntity.type !== "column") {
      return null;
    }

    return buttons.variants[selectedEntity.columnIndex];
  }, [selectedEntity, buttons]);

  const handleUpdateBackground = (newValue?: ColorRef) => {
    if (!buttonVariant) return;

    updateVariant({
      ...buttonVariant,
      background: newValue,
    });
  };

  if (!selectedEntity || selectedEntity.type !== "column") {
    return null;
  }

  return (
    <CanvasDrawer.Group>
      <div className="flex gap-2 text-base">
        Variant
        <Badge color="300">{selectedEntity.columnId}</Badge>
      </div>

      <BackgroundInput
        value={buttonVariant?.background}
        updateValue={handleUpdateBackground}
      />
    </CanvasDrawer.Group>
  );
};
