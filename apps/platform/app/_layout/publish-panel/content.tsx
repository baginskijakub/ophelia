import { motion } from "framer-motion";
import { ChangesPreview } from "./changes-preview";
import { StatusSummary } from "./status-summary";
import { usePublishPanel } from "./context";
import { cx } from "@platform/utils";
import { Badge } from "@platform/components";

export const Content = () => {
  const { open, status } = usePublishPanel();

  const variant = () => {
    if (!open) return "closed";

    return status;
  };

  return (
    <motion.div
      className={cx(
        "relative overflow-hidden w-full h-full",
        "flex gap-4 flex-1",
      )}
      variants={variants}
      initial={"closed"}
      animate={variant()}
    >
      <motion.div
        variants={slideInVariants}
        className="w-full h-full flex flex-1"
      >
        <ChangesPreview />
        <StatusSummary />
      </motion.div>

      <Badge className={cx("absolute top-0 right-0", "")} variant="outline">
        Esc
      </Badge>
    </motion.div>
  );
};

const variants = {
  closed: {
    opacity: 0,
    transition: {
      opacity: { duration: 0.1 },
    },
    transform: "translateY(-20px)",
    scaleY: 0.5,
  },
  review: {
    opacity: 1,
    transition: {
      opacity: { delay: 0.1 },
    },
    transform: "translateY(0px)",
    scaleY: 1,
  },
  publishing: {
    opacity: 1,
    transition: {
      opacity: { delay: 0.1 },
    },
    transform: "translateY(0px)",
    scaleY: 1,
  },
};

const slideInVariants = {
  review: {
    transform: "translateX(0px)",
  },
  publishing: {
    transform: "translateX(-375px)",
  },
};
