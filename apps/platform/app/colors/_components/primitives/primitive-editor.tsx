import { useRef } from "react";
import { usePrimitivesForm } from "./primitives-form";
import { Input, ColorPicker, CanvasDrawer } from "@platform/components";
import { useClickOutside } from "@platform/hooks";

export const PrimitiveEditor = () => {
  const {
    selectedColor,
    blurColor,
    handleChangeColorValue,
    handleChangePrimitiveGroupKey,
  } = usePrimitivesForm();

  const editorRef = useRef<HTMLDivElement>(null);

  useClickOutside(editorRef, () => blurColor());

  if (!selectedColor) {
    return null;
  }

  return (
    <CanvasDrawer open={!!selectedColor}>
      {selectedColor && (
        <div className="p-3 flex flex-col gap-4">
          <div className="w-full flex justify-between items-center gap-2">
            <p className="text-sm text-secondary">Group</p>

            <Input
              value={selectedColor.groupKey}
              variant="subtle"
              color={100}
              size={1}
              className="max-w-32"
              onChange={(e) => handleChangePrimitiveGroupKey(e.target.value)}
            />
          </div>

          <div className="w-full flex justify-between items-center gap-2">
            <p className="text-sm text-secondary">Name</p>
            <Input
              placeholder={selectedColor.shade.toString()}
              variant="subtle"
              color={100}
              size={1}
              disabled
              className="max-w-32"
            />
          </div>

          <ColorPicker.Root
            color={selectedColor.value}
            onChange={handleChangeColorValue}
          >
            <div className="w-full flex justify-between items-center gap-2">
              <p className="text-sm text-secondary">Color</p>
              <ColorPicker.ColorInput
                variant="outline"
                color={100}
                size={1}
                className="max-w-32"
              />
            </div>

            <ColorPicker.SaturationLightnessPicker />
            <ColorPicker.HueSlider />
          </ColorPicker.Root>
        </div>
      )}
    </CanvasDrawer>
  );
};
