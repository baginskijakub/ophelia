"use client";

import { cx } from "@platform/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import {
  BUTTON_HEIGHT,
  BUTTON_HEIGHT_CLASS,
  BUTTON_WIDTH,
  BUTTON_WIDTH_CLASS,
} from "./constants";
import { PublishButton } from "./publish-button";
import { usePublishPanel } from "./context";
import { Content } from "./content";
import { useClickOutside } from "@platform/hooks";
import { useRef } from "react";
import { useEscapeKeydown } from "radix-ui/internal";

export const PublishPanel = () => {
  const { status, open, close } = usePublishPanel();
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => close());

  useEscapeKeydown(() => {
    if (open) {
      close();
    }
  });

  const variant = () => {
    if (!open) return "closed";

    return status;
  };

  return (
    <div className="relative" ref={ref}>
      <span
        className={cx(
          "flex",
          BUTTON_WIDTH_CLASS,
          "min-h-8",
          BUTTON_HEIGHT_CLASS,
        )}
      />

      <AnimatePresence>
        <motion.div
          className={cx(
            "absolute",
            BUTTON_WIDTH_CLASS,
            BUTTON_HEIGHT_CLASS,
            "flex flex-col items-end",
            "bg-white z-20 surface-md",
            "overflow-hidden",
          )}
          layout
          variants={variants}
          initial={"closed"}
          animate={variant()}
        >
          <Content />

          <PublishButton />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const variants: Variants = {
  closed: {
    top: 0,
    right: 0,
    padding: "0px",
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderWidth: "0px",
  },
  review: {
    top: "-6px",
    right: "-6px",
    padding: "12px",
    width: "600px",
    height: "480px",
    borderWidth: "0.5px",
  },
  publishing: {
    top: "-6px",
    right: "-6px",
    padding: "12px",
    width: "400px",
    height: "240px",
    borderWidth: "0.5px",
  },
};
