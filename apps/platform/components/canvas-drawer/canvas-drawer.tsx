import { cx } from "@platform/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties, PropsWithChildren } from "react";

interface CanvasDrawerProps extends PropsWithChildren {
  open?: boolean;
  width?: CSSProperties["width"];
}

export const CanvasDrawer = (props: CanvasDrawerProps) => {
  const { open = false, width = "280px", children } = props;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            width: "0px",
            opacity: 0,
          }}
          animate={{
            width,
            opacity: 1,
          }}
          exit={{
            width: "0px",
            opacity: 0,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 300,
            duration: 0.2,
          }}
          className={cx(
            "h-full",
            "bg-primary border-l-[0.5px] border-primary-style",
            "flex flex-col",
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
