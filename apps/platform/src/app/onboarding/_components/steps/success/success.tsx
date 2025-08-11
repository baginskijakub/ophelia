"use client";

import { Text } from "@ophelia/ui";
import { motion } from "framer-motion";
import { SLIDE_UP_VARIANTS } from "../animation-constants";

export const Success = () => {
  return (
    <motion.div
      variants={SLIDE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Text role="heading" size="xl" color="text-70">
        {`You're all set!`}
      </Text>
    </motion.div>
  );
};
