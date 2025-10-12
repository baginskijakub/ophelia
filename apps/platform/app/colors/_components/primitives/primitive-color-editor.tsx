import { usePrimitivesForm } from "./primitives-form";
import { Input, ColorPicker } from "@platform/components";

export const PrimitiveColorEditor = () => {
  const {
    selectedEntity,
    handleChangeColorValue,
    handleChangePrimitiveGroupKey,
  } = usePrimitivesForm();

  if (!selectedEntity || selectedEntity.type !== "color") return null;

  return (
    <div className="p-3 flex flex-col gap-4">
      <div className="w-full flex justify-between items-center gap-2">
        <p className="text-sm text-secondary">Group</p>

        <Input
          value={selectedEntity.groupKey}
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
          placeholder={selectedEntity.shade.toString()}
          variant="subtle"
          color={100}
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
            color={100}
            size={1}
            className="max-w-32"
          />
        </div>

        <ColorPicker.SaturationLightnessPicker />
        <ColorPicker.HueSlider />
      </ColorPicker.Root>
    </div>
  );
};
