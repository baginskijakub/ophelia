import { Button } from "@platform/components";
import { cx } from "@platform/utils";
import { BUTTON_HEIGHT_CLASS, BUTTON_WIDTH_CLASS } from "./constants";
import { usePublishPanel } from "./context";
import { AnimatePresence, motion } from "framer-motion";

export const PublishButton = () => {
  const { status, handlePublishClick } = usePublishPanel();

  const getButtonText = () => {
    if (status === "publishing") {
      return "Publishing";
    }
    return "Publish changes";
  };

  return (
    <Button
      className={cx(BUTTON_HEIGHT_CLASS, BUTTON_WIDTH_CLASS, "gap-2")}
      onClick={handlePublishClick}
    >
      <div>
        <AnimatePresence mode="popLayout" initial={false}>
          {getButtonText()
            .split("")
            .map((letter, index) => {
              return (
                <motion.div
                  initial={{ opacity: 0, filter: "blur(2px)" }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: {
                      type: "spring",
                      stiffness: 350,
                      damping: 55,
                      delay: index * 0.015,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(2px)",
                    transition: {
                      type: "spring",
                      stiffness: 500,
                      damping: 55,
                    },
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 55,
                  }}
                  key={`${index}-${letter}-${getButtonText()}`}
                  className="inline-block"
                >
                  {letter}
                  {letter === " " ? "\u00A0" : ""}
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      <span className="font-mono text-xs px-2.5 py-0.5 bg-white/15 rounded-full">
        v1.0.1
      </span>
    </Button>
  );
};
