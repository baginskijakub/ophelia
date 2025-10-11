"use client";

import { cx } from "@platform/utils";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

interface CanvasProps extends PropsWithChildren {}

export const Canvas = (props: CanvasProps) => {
  const { children } = props;

  return (
    <motion.div
      layout
      className={cx(
        "bg-primary bg-[radial-gradient(#F0F2F4_1px,transparent_1px)]",
        "[background-size:16px_16px]",
        "border-primary-style border-l-[0.5px] border-t-[0.5px] rounded-ss-lg",
        "flex-1",
      )}
    >
      {children}
    </motion.div>
  );
};
