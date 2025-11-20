import { cx } from "@platform/utils";
import { motion, Variants } from "framer-motion";
import { usePublishPanel } from "./context";
import { CheckIcon, ClockFadingIcon, LoaderIcon } from "lucide-react";
import { Loader } from "@platform/components";

export const StatusSummary = () => {
  const { status } = usePublishPanel();

  const variant = () => {
    if (status === "publishing") {
      return "visible";
    }

    return "hidden";
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
        <div className="flex items-center gap-2">
          <CheckIcon className={cx("w-4 h-4 text-green-600")} />
          <p className="text-sm flex-1">Preparing assets</p>
          <p className="text-xs text-tertiary pr-1">19s</p>
        </div>

        <span className="w-[0.5px] h-2 bg-gray-400 ml-[7.5px]" />

        <div className="flex items-center gap-2">
          <CheckIcon className={cx("w-4 h-4 text-green-600")} />
          <p className="text-sm flex-1">Building component library</p>
          <p className="text-xs text-tertiary pr-1">42s</p>
        </div>

        <span className="w-[0.5px] h-2 bg-gray-400 ml-[7.5px]" />

        <div className="flex items-center gap-2">
          <Loader className={cx("w-4 h-4 text-tertiary")} />
          <p className="text-sm flex-1">Publishing to npm</p>
          <p className="text-xs text-tertiary pr-1">3s</p>
        </div>

        <span className="w-[0.5px] h-2 bg-gray-400 ml-[7.5px]" />

        <div className="flex items-center gap-2">
          <span className={cx("w-4 h-4 flex items-center justify-center")}>
            <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
          </span>
          <p className="text-sm flex-1">Publishing to Figma</p>
        </div>
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
