"use client";

import { Badge, Button, Separator } from "@platform/components";
import { useClickOutside } from "@platform/hooks";
import { cx } from "@platform/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export const PublishPanel = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useClickOutside(ref, () => {
    setOpen(false);
  });

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative" ref={ref}>
      <span className="flex h-8 w-48" />

      <AnimatePresence>
        <motion.div
          className={cx(
            "absolute",
            "h-8 w-48 p-0",
            "flex flex-col items-end",
            "bg-white z-20 surface-md",
            "overflow-hidden",
          )}
          layout
          variants={variants}
          initial={"closed"}
          animate={open ? "open" : "closed"}
        >
          <ChangesPreview open={open} />

          <Button className="h-8 w-48" onClick={onToggle}>
            Publish
            <span className="font-mono text-xs px-2.5 py-0.5 bg-white/15 rounded-full">
              v1.0.0
            </span>
          </Button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const variants: Variants = {
  open: {
    top: "-6px",
    right: "-6px",
    padding: "12px",
    width: "600px",
    height: "420px",
    borderWidth: "0.5px",
  },
  closed: {
    top: 0,
    right: 0,
    padding: "0px",
    width: "192px",
    height: "32px",
    borderWidth: "0px",
  },
};

interface ChangesPreviewProps {
  open: boolean;
}

const ChangesPreview = (props: ChangesPreviewProps) => {
  const { open } = props;

  return (
    <motion.div
      variants={changesPreviewVariants}
      initial={"closed"}
      animate={open ? "open" : "closed"}
      className={cx("overflow-hidden w-full", "flex flex-col gap-4")}
    >
      <div className="flex gap-3 items-end">
        <h3 className="text-xl">New release</h3>

        <div className="flex gap-1.5 pb-[2px] items-center">
          <Badge>v1.0.0</Badge>
          <ChevronRight className="w-4 h-4 text-tertiary" />
          <Badge>v1.0.1</Badge>
        </div>
      </div>

      <textarea
        className="w-full h-12 focus:outline-none"
        placeholder="Describe changes..."
      />

      <Separator />
    </motion.div>
  );
};

const changesPreviewVariants: Variants = {
  open: {
    height: "400px",
    transform: "translateY(0px)",
    scaleY: 1,
    opacity: 1,
    transition: {
      opacity: { delay: 0.1 },
    },
  },
  closed: {
    height: "0px",
    transform: "translateY(-20px)",
    scaleY: 0.5,
    opacity: 0,
    transition: {
      opacity: { duration: 0.1 },
    },
  },
};
