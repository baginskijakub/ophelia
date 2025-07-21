import { PropsWithChildren } from "react";
import styles from "./group.module.css";
import { useGroup } from "./context";
import { motion, AnimatePresence } from "framer-motion";

export const Content = (props: PropsWithChildren) => {
  const { children } = props;

  const { open } = useGroup();

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          className={styles.contentRoot}
          layout
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
