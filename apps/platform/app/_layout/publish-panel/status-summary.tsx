import { cx } from "@platform/utils";
import { motion, Variants } from "framer-motion";
import { usePublishPanel } from "./context";
import { useEffect, useState } from "react";
import { StatusStep } from "./status-step";

type PublishingStatus =
  | "preparing"
  | "building"
  | "publishing-npm"
  | "publishing-figma"
  | "completed";

const stepOrder: Map<PublishingStatus, number> = new Map([
  ["preparing", 0],
  ["building", 1],
  ["publishing-npm", 2],
  ["publishing-figma", 3],
  ["completed", 4],
]);

export const StatusSummary = () => {
  const { status } = usePublishPanel();

  const [publishingStatus, setPublishingStatus] =
    useState<PublishingStatus>("preparing");

  const randomDelay = () => Math.random() * 20000 + 5000;

  useEffect(() => {
    setTimeout(() => {
      setPublishingStatus((prev) => {
        if (prev === "preparing") return "building";
        if (prev === "building") return "publishing-npm";
        if (prev === "publishing-npm") return "publishing-figma";
        if (prev === "publishing-figma") return "completed";
        return prev;
      });
    }, randomDelay());
  }, [publishingStatus]);

  const variant = () => {
    if (status === "publishing") {
      return "visible";
    }

    return "hidden";
  };

  const getStepStatus = (step: PublishingStatus) => {
    if (!publishingStatus) {
      return "pending";
    }

    const currentStepOrder = stepOrder.get(publishingStatus)!;
    const targetStepOrder = stepOrder.get(step)!;

    if (currentStepOrder > targetStepOrder) {
      return "completed";
    } else if (currentStepOrder === targetStepOrder) {
      return "in-progress";
    } else {
      return "pending";
    }
  };

  return (
    <motion.div
      variants={variants}
      initial={"hidden"}
      animate={variant()}
      className={cx("min-w-full max-h-full", "flex flex-col gap-3")}
    >
      Status
      <div className="flex flex-col gap-1">
        <StatusStep status={getStepStatus("preparing")}>
          Preparing assets
        </StatusStep>

        <span className="w-[0.5px] h-2 bg-gray-400 ml-[7.5px]" />

        <StatusStep status={getStepStatus("building")}>
          Building component library
        </StatusStep>

        <span className="w-[0.5px] h-2 bg-gray-400 ml-[7.5px]" />

        <StatusStep status={getStepStatus("publishing-npm")}>
          Publishing to npm
        </StatusStep>

        <span className="w-[0.5px] h-2 bg-gray-400 ml-[7.5px]" />

        <StatusStep status={getStepStatus("publishing-figma")}>
          Publishing to Figma
        </StatusStep>
      </div>
    </motion.div>
  );
};

const variants: Variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
