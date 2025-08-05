"use client";

import { motion } from "framer-motion";
import { Blade } from "./blade";
import styles from "./animated-logo.module.css";
import {
  createBladeVariants,
  LOGO_SCALE_VARIANTS,
} from "../../animation-constants";

export const AnimatedLogo = (): React.ReactElement => {
  const BLADE_ROTATIONS = Array.from({ length: 8 }).map(
    (_, i) => i * (360 / 8),
  );

  const bladeVariants = createBladeVariants(BLADE_ROTATIONS);

  return (
    <motion.div
      className={styles.root}
      variants={LOGO_SCALE_VARIANTS}
      initial="initial"
      animate="scaledDown"
    >
      {BLADE_ROTATIONS.map((_, index) => (
        <Blade
          key={index}
          initial="hidden"
          animate="visible"
          variants={bladeVariants}
          custom={index}
        />
      ))}
    </motion.div>
  );
};
