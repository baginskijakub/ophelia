"use client";

import { Text } from "@ophelia/ui";
import { motion } from "framer-motion";
import { AnimatedLogo } from "./animated-logo";
import { FADE_VARIANTS, TEXT_SLIDE_VARIANTS } from "../animation-constants";

export const Initial = () => {
  return (
    <motion.div
      variants={FADE_VARIANTS}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <motion.div variants={TEXT_SLIDE_VARIANTS}>
        <Text role="heading" size="xl" color="text-70">
          Welcome to
        </Text>
      </motion.div>
      <AnimatedLogo />
      <motion.div variants={TEXT_SLIDE_VARIANTS}>
        <Text role="heading" size="xl" color="text-70">
          Ophelia
        </Text>
      </motion.div>
    </motion.div>
  );
};
