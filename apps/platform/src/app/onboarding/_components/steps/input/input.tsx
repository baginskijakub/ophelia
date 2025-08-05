"use client";

import { Text } from "@ophelia/ui";
import { motion } from "framer-motion";
import { SLIDE_UP_VARIANTS } from "../animation-constants";
import styles from "./input.module.css";

export const Input = () => {
  return (
    <motion.div
      variants={SLIDE_UP_VARIANTS}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.root}
    >
      <Text role="heading" size="xl" color="text-70" align="center">
        {`Drop your company's website link`} <br />
        below and we will create <br />
        an organization for you
      </Text>

      <input
        placeholder="Paste link here"
        className={styles.input}
        id="website-link"
      />
    </motion.div>
  );
};
