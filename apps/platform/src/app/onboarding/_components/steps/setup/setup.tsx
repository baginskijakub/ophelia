"use client";

import { Text } from "@ophelia/ui";
import { motion } from "framer-motion";
import { SLIDE_UP_VARIANTS } from "../animation-constants";

export const Setup = () => {
  return (
    <motion.div
      variants={SLIDE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Text role="heading" size="xl" color="text-70">
        {`Let's get you set up real quick`}
      </Text>
    </motion.div>
  );
};
