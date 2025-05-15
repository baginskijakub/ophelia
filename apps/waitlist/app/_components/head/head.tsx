import Image from "next/image";
import styles from "./head.module.css";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";

export const Head = () => {
  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <h1 className={clsx("text-display", styles.heading)}>
          <Image
            src="/ophelia-logo.png"
            alt="Ophelia logo"
            className={styles.icon}
            width={48}
            height={48}
          />{" "}
          Hire effortlessly with Ophelia
        </h1>
      </div>

      <p className={clsx("text-headline", styles.caption)}>
        Create branded site with your job post and track candidates with our
        platform.
      </p>

      <button className={clsx("text-body", styles.button)}>
        Get early access
        <ChevronRight width={20} height={20} color="#FFFFFF" />
      </button>
    </div>
  );
};
