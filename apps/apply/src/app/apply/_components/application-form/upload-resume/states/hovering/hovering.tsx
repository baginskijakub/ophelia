import { Text } from "@ophelia/ui";
import styles from "./hovering.module.css";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  hovering: boolean;
}

export const Hovering = (props: Props) => {
  const { hovering } = props;

  return (
    <AnimatePresence>
      {hovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          className={styles["root"]}
        >
          <Text role="label" size="lg" color="brand">
            Drop your resume here
          </Text>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
