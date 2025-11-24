import { usePrimitivesForm } from "./primitives-form";
import {
  Input,
  ColorPicker,
  Badge,
  ColorIndicator,
  CanvasDrawer,
} from "@platform/components";
import { PrimitivesMenu } from "./primitives-menu";

export const PrimitiveColorEditor = () => {
  const {
    selectedEntity,
    handleChangeColorValue,
    handleChangePrimitiveGroupKey,
  } = usePrimitivesForm();

  if (!selectedEntity || selectedEntity.type !== "color") return null;

  return (
    <>
      <CanvasDrawer.Group className="flex-row justify-between items-center">
        <Badge size="sm" color="200" className="text-nowrap">
          <ColorIndicator color={selectedEntity.value} className="mr-2" />
          {selectedEntity.groupKey}-{selectedEntity.shade}
        </Badge>

        <PrimitivesMenu />
      </CanvasDrawer.Group>

      <CanvasDrawer.Group>
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm text-secondary">Group name</p>

          <Input
            value={selectedEntity.groupKey}
            variant="subtle"
            color="300"
            size={1}
            className="max-w-32"
            onChange={(e) => handleChangePrimitiveGroupKey(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm text-secondary">Name</p>
          <Input
            placeholder={selectedEntity.shade.toString()}
            variant="subtle"
            color="300"
            size={1}
            disabled
            className="max-w-32"
          />
        </div>

        <ColorPicker.Root
          color={selectedEntity.value}
          onChange={handleChangeColorValue}
        >
          <div className="w-full flex justify-between items-center gap-2">
            <p className="text-sm text-secondary">Color</p>
            <ColorPicker.ColorInput
              variant="outline"
              color="300"
              size={1}
              className="max-w-32"
            />
          </div>

          <ColorPicker.SaturationLightnessPicker />
          <ColorPicker.HueSlider />
        </ColorPicker.Root>
      </CanvasDrawer.Group>
    </>
  );
};
