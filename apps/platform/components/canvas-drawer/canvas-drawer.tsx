import { cx } from "@platform/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties, PropsWithChildren } from "react";

interface CanvasDrawerProps extends PropsWithChildren {
  open?: boolean;
  width?: CSSProperties["width"];
  ref?: React.RefObject<HTMLDivElement | null>;
}

export const CanvasDrawer = (props: CanvasDrawerProps) => {
  const { open = false, width = "280px", ref, children } = props;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={ref}
          initial={{
            width: "0px",
            opacity: 0,
          }}
          animate={{
            width,
            opacity: 1,
            transition: {
              opacity: { duration: 0.1, delay: 0.1 },
            },
          }}
          exit={{
            width: "0px",
            opacity: 0,
            transition: {
              opacity: { duration: 0.1 },
            },
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 300,
            duration: 0.2,
          }}
          className={cx(
            "absolute top-0 right-0",
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
