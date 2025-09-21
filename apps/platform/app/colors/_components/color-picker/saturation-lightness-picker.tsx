import { colord } from "colord";
import { useColorPicker } from "./use-color-picker";

export const SaturationLightnessPicker = () => {
  const {
    hue,
    saturation,
    value,
    color,
    saturationValueRef,
    handleSaturationValueMouseDown,
  } = useColorPicker();

  const baseHueColor = colord({ h: hue, s: 100, l: 50 }).toRgbString();

  const markerPos = {
    left: `${saturation}%`,
    top: `${100 - value}%`,
  };

  return (
    <div
      ref={saturationValueRef}
      className="relative w-full h-40 rounded-md cursor-crosshair shadow"
      onMouseDown={handleSaturationValueMouseDown}
      style={{
        background: `
          linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0)),
          linear-gradient(to right, rgba(255,255,255,1), transparent),
          ${baseHueColor}
        `,
        boxShadow: `inset 0 0 0 1px rgba(0, 0, 0, 0.1)`,
      }}
    >
      <div
        className="absolute w-[15px] h-[15px] rounded-full border-3 border-white pointer-events-none shadow"
        style={{
          top: markerPos.top,
          left: markerPos.left,
          transform: "translate(-50%, -50%)",
          backgroundColor: color,
        }}
      />
    </div>
  );
};
