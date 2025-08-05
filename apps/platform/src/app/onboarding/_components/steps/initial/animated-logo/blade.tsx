import { motion, MotionProps } from "framer-motion";
import styles from "./animated-logo.module.css";

export const Blade = (props: MotionProps) => {
  return (
    <motion.div {...props} className={styles.bladeRoot}>
      <svg
        width="7"
        height="40"
        viewBox="0 0 7 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width="7" height="40" fill="transparent" />
        <path
          d="M0 0.25C0 0.111929 0.111929 0 0.25 0H6.75C6.88807 0 7 0.111929 7 0.25V13.3964C7 13.6192 6.73071 13.7307 6.57322 13.5732L0.0732235 7.07322C0.0263394 7.02634 0 6.96275 0 6.89645V0.25Z"
          fill="#7E85FF"
        />
      </svg>
    </motion.div>
  );
};
