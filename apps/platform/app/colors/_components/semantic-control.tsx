import { useRef, useState } from "react";
import { ColorIndicator } from "../../../components/color-indicator";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useClickOutside } from "../../../hooks";
import { PrimitiveRef } from "@repo/types";
import { mockOpheliaConfig } from "../../config";
import React from "react";

interface SemanticControlProps {
  semanticGroup: string;
  colorKey: string;
  primitiveRef: PrimitiveRef;
}

export const SemanticControl = (props: SemanticControlProps) => {
  const { semanticGroup, colorKey, primitiveRef } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const value = mockOpheliaConfig.themes[0]?.colors.primitives.find(
    (pri) => pri.key === primitiveRef.key,
  )?.values[primitiveRef.shade || "500"];

  const pickerRef = useRef<HTMLDivElement>(null);

  useClickOutside(pickerRef, () => {
    setIsExpanded(false);
  });

  if (!value) return null;

  return (
    <div className="relative">
      <button
        className={clsx(
          "w-40 p-2 bg-primary",
          "flex items-center gap-1",
          "text-xs font-mono text-secondary",
          "cursor-pointer",
          "surface-base",
          isExpanded && "opacity-0",
        )}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-haspopup="dialog"
        aria-expanded={isExpanded}
        aria-controls="color-picker-dialog"
      >
        <ColorIndicator color={value} />
        <span className="text-left truncate flex-1">
          {semanticGroup}-{colorKey}
          const [currentColor, setCurrentColor] = useState(primitiveRef);
        </span>
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
                width: "200px",
                top: "-12px",
                left: "-20px",
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
                "bg-primary surface-base",
                "flex flex-col",
                "text-xs font-mono text-secondary",
              )}
            >
              <div className="flex items-center gap-1 p-2">
                <ColorIndicator color={value} />
                <span className="text-left truncate flex-1">
                  {semanticGroup}-{colorKey}
                </span>
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
                <span className="flex h-[0.5px] w-full bg-gray-400" />

                <div className="h-48 flex flex-col overflow-y-auto">
                  {mockOpheliaConfig.themes[0]?.colors.primitives.map(
                    (primitive, idx) => (
                      <React.Fragment key={idx}>
                        {idx !== 0 && (
                          <span className="h-[0.5px] w-full bg-gray-400" />
                        )}

                        {Object.entries(primitive.values).map(
                          ([shade, val]) => (
                            <button
                              key={shade}
                              className="w-full p-2 flex items-center gap-1 hover:bg-gray-100"
                            >
                              <ColorIndicator color={val} />
                              {primitive.key}-{shade}
                            </button>
                          ),
                        )}
                      </React.Fragment>
                    ),
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
