import { colord } from "colord";
import {
  createContext,
  MouseEventHandler,
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
} from "react";

export interface ColorPickerProps extends PropsWithChildren {
  color: string;
  onChange: (color: string) => void;
}

interface ColorPickerContextValues {
  color: string;
  hue: number;
  saturation: number;
  value: number;
  saturationValueRef: React.RefObject<HTMLDivElement | null>;
  hueSliderRef: React.RefObject<HTMLDivElement | null>;
  handleSaturationValueMouseDown: MouseEventHandler<HTMLDivElement>;
  handleHueMouseDown: MouseEventHandler<HTMLDivElement>;
  handleInputChange: (value: string) => void;
}

export const ColorPickerContext = createContext<ColorPickerContextValues>(
  {} as ColorPickerContextValues,
);

export const ColorPickerProvider = (props: ColorPickerProps) => {
  const { color: initialHexColor, onChange, children } = props;

  const [hue, setHue] = useState<number>(
    () => colord(initialHexColor).toHsv().h,
  );
  const [saturation, setSaturation] = useState<number>(
    () => colord(initialHexColor).toHsv().s,
  );
  const [value, setValue] = useState<number>(
    () => colord(initialHexColor).toHsv().v,
  );

  const saturationValueRef = useRef<HTMLDivElement>(null);
  const hueSliderRef = useRef<HTMLDivElement>(null);

  const emitChange = useCallback(
    (h: number, s: number, v: number) => {
      const newColor = colord({
        h,
        s,
        v,
        a: 1,
      }).toHex();
      onChange(newColor);
    },
    [onChange],
  );

  const handleSaturationValueChange = useCallback(
    (event: ReactMouseEvent | MouseEvent) => {
      const container = saturationValueRef.current;
      if (!container) return;

      const { left, top, width, height } = container.getBoundingClientRect();
      const clientX = event.clientX;
      const clientY = event.clientY;

      const x = Math.max(0, Math.min(1, (clientX - left) / width));
      const y = Math.max(0, Math.min(1, (clientY - top) / height));

      const newSaturation = x * 100;
      const newValue = (1 - y) * 100;

      setSaturation(newSaturation);
      setValue(newValue);
      emitChange(hue, newSaturation, newValue);
    },
    [emitChange, hue],
  );

  const handleSaturationValueMouseDown = useCallback(
    (event: ReactMouseEvent) => {
      event.preventDefault();
      handleSaturationValueChange(event);

      const onMouseMove = (moveEvent: MouseEvent) => {
        handleSaturationValueChange(moveEvent);
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [handleSaturationValueChange],
  );

  const handleHueChange = useCallback(
    (event: ReactMouseEvent | MouseEvent) => {
      const container = hueSliderRef.current;

      if (!container) return;

      const { left, width } = container.getBoundingClientRect();
      const clientX = event.clientX;

      let newHue = ((clientX - left) / width) * 360;
      newHue = Math.max(0, Math.min(359, newHue));

      setHue(newHue);
      emitChange(newHue, saturation, value);
    },
    [emitChange, saturation, value],
  );

  const handleHueMouseDown: MouseEventHandler<HTMLDivElement> = useCallback(
    (event: ReactMouseEvent) => {
      event.preventDefault();
      handleHueChange(event);

      const onMouseMove = (moveEvent: MouseEvent) => {
        handleHueChange(moveEvent);
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [handleHueChange],
  );

  const handleInputChange = (value: string) => {
    const newColor = colord(value);

    if (newColor.isValid()) {
      const newHsv = newColor.toHsv();
      setHue(newHsv.h);
      setSaturation(newHsv.s);
      setValue(newHsv.v);
      onChange(newColor.toHex());
    }
  };

  return (
    <ColorPickerContext.Provider
      value={{
        saturationValueRef,
        hueSliderRef,
        handleSaturationValueMouseDown,
        handleHueMouseDown,
        handleInputChange,
        hue,
        saturation,
        value,
        color: initialHexColor,
      }}
    >
      {children}
    </ColorPickerContext.Provider>
  );
};

export const useColorPicker = () => {
  const context = useContext(ColorPickerContext);

  if (!context) {
    throw new Error("useColorPicker must be used within a ColorPickerProvider");
  }

  return context;
};
