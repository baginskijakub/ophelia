import { motion } from "framer-motion";
import { LoadingSpinner, Icon } from "../../index";
import styles from "./button.module.css";
import { PropsWithChildren } from "react";
import { useButton } from "./context";

const BUTTON_HEIGHT = {
  sm: 32,
  md: 36,
  lg: 40,
};

export const ButtonContent: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { state, size } = useButton();

  const reelVariants = {
    default: { y: 0 },
    loading: { y: `-${BUTTON_HEIGHT[size]}px` },
    success: { y: `-${2 * BUTTON_HEIGHT[size]}px` },
  };

  return (
    <div className={styles["content-root"]}>
      <motion.div
        className={styles["content-reel"]}
        variants={reelVariants}
        animate={state}
        initial="default"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className={styles.item}>{children}</div>

        {state !== "default" && (
          <>
            <div className={styles.item}>
              <LoadingSpinner size="sm" />
            </div>

            <div className={styles.item}>
              <Icon name="check" size="md" />
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};
