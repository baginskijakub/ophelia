import { Badge, Separator } from "@platform/components";
import { cx } from "@platform/utils";
import { motion, Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { PropsWithChildren } from "react";
import { usePublishPanel } from "./context";

export const ChangesPreview = () => {
  const { status, open, textareaRef } = usePublishPanel();

  const variant = () => {
    if (!open) return "closed";

    return status;
  };

  return (
    <motion.div
      variants={changesPreviewVariants}
      initial={"closed"}
      animate={variant()}
      className={cx("overflow-hidden w-full", "flex flex-col gap-4 flex-1")}
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
        ref={textareaRef}
        className="w-full h-12 focus:outline-none resize-none"
        placeholder="Describe changes..."
      />

      <Separator />

      <div className={cx("flex flex-col gap-4 flex-1")}>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl"> Changes </h3>
          <p className="text-base text-tertiary">
            Review introduced changes before publishing.
          </p>
        </div>

        <List>
          <ListTitle>Colors</ListTitle>

          <ListItem>Changed gray-600 to gray-700 for better contrast.</ListItem>

          <ListItem>Updated primary color from blue to teal.</ListItem>
        </List>

        <List>
          <ListTitle>Button</ListTitle>

          <ListItem>Updated primary color from blue to teal.</ListItem>
        </List>
      </div>
    </motion.div>
  );
};

const changesPreviewVariants: Variants = {
  closed: {
    transform: "translateY(-20px)",
    scaleY: 0.5,
    opacity: 0,
    transition: {
      opacity: { duration: 0.1 },
    },
  },
  review: {
    transform: "translateY(0px)",
    scaleY: 1,
    opacity: 1,
    transition: {
      opacity: { delay: 0.1 },
    },
  },
  publishing: {
    transform: "translateY(0px)",
    scaleY: 1,
    opacity: 1,
    transition: {
      opacity: { delay: 0.1 },
    },
  },
};

// extracted list components

const List = (props: PropsWithChildren) => {
  const { children } = props;

  return <div className="flex flex-col gap-2">{children}</div>;
};

const ListTitle = (props: PropsWithChildren) => {
  const { children } = props;

  return <h4 className="text-lg">{children}</h4>;
};

const ListItem = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <li className="flex gap-2 items-center text-base text-secondary">
      <span className="h-1.5 w-1.5 bg-gray-500 rounded-full" />
      {children}
    </li>
  );
};
