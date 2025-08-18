import { Text } from "../text";
import styles from "./error-label.module.css";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ErrorLabelProps extends React.HTMLAttributes<HTMLParagraphElement> {
  valid?: boolean;
}

export const ErrorLabel = (props: ErrorLabelProps) => {
  const { children, valid = true, ...rest } = props;

  const variants: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        opacity: { duration: 0.15 },
      },
    },
    visible: {
      opacity: 1,
      transition: {
        scale: { duration: 0.2 },
      },
    },
  };

  return (
    <AnimatePresence>
      o
      {!valid && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          key="error-label"
        >
          <Text
            size="sm"
            className={styles.root}
            {...rest}
            color="text-90"
            role="paragraph"
          >
            {children}
          </Text>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
