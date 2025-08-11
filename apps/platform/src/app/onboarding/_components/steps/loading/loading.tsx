"use client";

import { motion } from "framer-motion";
import { AnimatedLogo } from "../initial/animated-logo";
import { FADE_VARIANTS, ROTATING_LOGO_VARIANTS } from "../animation-constants";
import styles from "./loading.module.css";

export const Loading = () => {
  return (
    <motion.div
      className={styles.root}
      variants={FADE_VARIANTS}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        variants={ROTATING_LOGO_VARIANTS}
        initial="initial"
        animate="spinning"
      >
        <AnimatedLogo />
      </motion.div>
    </motion.div>
  );
};
