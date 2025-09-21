import { useColorPicker } from "./use-color-picker";

export const HueSlider = () => {
  const { hue, hueSliderRef, handleHueMouseDown } = useColorPicker();

  const hueMarkerPos = {
    left: `${(hue / 360) * 100}%`,
  };

  return (
    <div
      ref={hueSliderRef}
      className="relative w-full h-4 rounded-full cursor-ew-resize border border-white shadow"
      onMouseDown={handleHueMouseDown}
      style={{
        background: `
            linear-gradient(to right,
              #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)
          `,
        boxShadow: `inset 0 0 0 1px rgba(0, 0, 0, 0.2)`,
      }}
    >
      <div
        className="absolute -top-[0.5px] bottom-0 w-[15px] h-[15px] rounded-full border-3 border-white pointer-events-none shadow"
        style={{
          left: hueMarkerPos.left,
          transform: "translateX(-50%)",
          backgroundColor: `hsl(${hue}, 100%, 50%)`,
        }}
      />
    </div>
  );
};
