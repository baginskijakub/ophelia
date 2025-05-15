import clsx from "clsx";
import styles from "./join.module.css";
import Image from "next/image";
import { Flex } from "../../../components";

export const Join = () => {
  return (
    <div className={styles.root}>
      <Image
        src="/ophelia-logo.png"
        alt="Ophelia logo"
        className={styles.icon}
        width={120}
        height={120}
      />

      <h1 className={clsx(styles.heading, "text-display")}>
        Join the waitlist for <span className={styles.highlight}>Ophelia</span>
      </h1>

      <div className={styles.container}>
        <input placeholder="Enter your email" className={styles.input} />
        <Flex justify="space-between" align="center">
          <p className={clsx("text-caption", styles.caption)}>
            Drop your email to get notified once we are ready to launch
          </p>

          <button className={clsx("text-body", styles.button)}>
            Join waitlist
          </button>
        </Flex>
      </div>
    </div>
  );
};
