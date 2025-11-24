import { Loader } from "@platform/components";
import { cx } from "@platform/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { CheckIcon } from "lucide-react";

interface Props {
  status: "pending" | "in-progress" | "completed";
}

export const StatusStepIcon = (props: Props) => {
  const { status } = props;

  return (
    <AnimatePresence>
      <div className="w-4 h-4 relative">
        <motion.div
          variants={variants}
          initial={status === "completed" ? "visible" : "hidden"}
          animate={status === "completed" ? "visible" : "hidden"}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="absolute"
        >
          <CheckIcon className={cx("w-4 h-4 text-green-600")} />
        </motion.div>

        <motion.div
          variants={variants}
          initial={status === "in-progress" ? "visible" : "hidden"}
          animate={status === "in-progress" ? "visible" : "hidden"}
          className="absolute"
        >
          <Loader className={cx("w-4 h-4 text-tertiary")} />
        </motion.div>

        <motion.div
          variants={variants}
          initial={status === "pending" ? "visible" : "hidden"}
          animate={status === "pending" ? "visible" : "hidden"}
          className="absolute"
        >
          <span className={cx("w-4 h-4 flex items-center justify-center")}>
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
          </span>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
    filter: "blur(8px)",
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.3,
    },
  },
};
