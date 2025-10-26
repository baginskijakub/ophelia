import { Badge, CanvasDrawer } from "@platform/components";
import { useButtonForm } from "../../button-form";
import { useMemo } from "react";
import { HeightInput } from "./height-input";
import { HorizontalPaddingInput } from "./horizontal-padding-input";

export const SizeEditor = () => {
  const { selectedEntity, buttons, updateSize } = useButtonForm();

  const buttonSize = useMemo(() => {
    if (!selectedEntity || selectedEntity.type !== "row") {
      return null;
    }

    return buttons.sizes[selectedEntity.rowIndex];
  }, [selectedEntity, buttons]);

  const handleHeightBlur = (newValue: number) => {
    if (!buttonSize) return;

    updateSize({
      ...buttonSize,
      height: newValue,
    });
  };

  const handleHorizontalPaddingBlur = (newValue: number) => {
    if (!buttonSize) return;

    updateSize({
      ...buttonSize,
      horizontalPadding: newValue,
    });
  };

  if (!selectedEntity || selectedEntity.type !== "row" || !buttonSize) {
    return null;
  }

  return (
    <CanvasDrawer.Group>
      <div className="flex gap-2 text-base">
        Size
        <Badge color="300">{selectedEntity.rowId}</Badge>
      </div>

      <HeightInput
        defaultValue={buttonSize.height}
        updateValue={handleHeightBlur}
      />

      <HorizontalPaddingInput
        defaultValue={buttonSize.horizontalPadding}
        updateValue={handleHorizontalPaddingBlur}
      />
    </CanvasDrawer.Group>
  );
};
