import { useRef, useState } from "react";
import { ColorIndicator } from "../../../../components/color-indicator";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "../../../../hooks";
import { ColorPicker } from "../color-picker";

interface PrimitiveControlProps {
  primitiveGroup: string;
  colorKey: string;
  value: string;
  onChange: (newColor: string) => void;
}

export const PrimitveControl = (props: PrimitiveControlProps) => {
  const { primitiveGroup, colorKey, value, onChange } = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentColor, setCurrentColor] = useState(value);

  const pickerRef = useRef<HTMLDivElement>(null);

  useClickOutside(pickerRef, () => {
    setIsExpanded(false);
  });

  return (
    <div className="relative">
      <button
        className={clsx(
          "w-40 p-2 bg-primary surface-base",
          "flex items-center gap-1",
          "text-xs font-mono text-secondary",
          "cursor-pointer",
          isExpanded && "opacity-0",
        )}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-haspopup="dialog"
        aria-expanded={isExpanded}
        aria-controls="color-picker-dialog"
      >
        <ColorIndicator color={value} />
        {primitiveGroup}-{colorKey}
      </button>

      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              className="fixed inset-0 bg-gray-50/70 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              ref={pickerRef}
              id="color-picker-dialog"
              role="dialog"
              aria-modal="true"
              initial={{
                width: "160px",
                top: "0px",
                left: "0px",
              }}
              animate={{
                width: "260px",
                top: "-12px",
                left: "-40px",
                transition: {
                  duration: 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                },
              }}
              exit={{
                width: "160px",
                top: "0px",
                left: "0px",
                transition: {
                  duration: 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  delay: 0.05,
                },
              }}
              className={clsx(
                "absolute z-20 overflow-hidden",
                "p-2 bg-primary surface-base",
                "flex flex-col",
                "text-xs font-mono text-secondary",
              )}
            >
              <div className="flex items-center gap-1">
                <ColorIndicator color={currentColor} />
                {primitiveGroup}-{colorKey}
              </div>

              <motion.div
                initial={{ opacity: 0, height: 0, scale: 0.85 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  scale: 1,
                  transition: {
                    duration: 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: 0.05,
                  },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  scale: 0.85,
                  transition: {
                    duration: 0.05,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
              >
                <ColorPicker.Root
                  color={currentColor}
                  onChange={(v) => setCurrentColor(v)}
                  className="mt-2"
                >
                  <ColorPicker.ColorInput />
                  <ColorPicker.SaturationLightnessPicker />
                  <ColorPicker.HueSlider />
                </ColorPicker.Root>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
