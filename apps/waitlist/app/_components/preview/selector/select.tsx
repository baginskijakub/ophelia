"use client";

import clsx from "clsx";
import styles from "./select.module.css";
import { useState } from "react";
import Image from "next/image";

type Option = "Meta" | "Netflix" | "Google";

export const Select = () => {
  const [selected, setSelected] = useState<Option>("Meta");

  return (
    <>
      <div className={styles.root}>
        <button
          className={clsx(
            "text-body",
            styles.option,
            selected === "Meta" && styles.selected
          )}
          onClick={() => setSelected("Meta")}
        >
          Meta
        </button>

        <button
          className={clsx(
            "text-body",
            styles.option,
            selected === "Netflix" && styles.selected
          )}
          onClick={() => setSelected("Netflix")}
        >
          Netflix
        </button>

        <button
          className={clsx(
            "text-body",
            styles.option,
            selected === "Google" && styles.selected
          )}
          onClick={() => setSelected("Google")}
        >
          Google
        </button>
      </div>

      <Image
        src={`/${selected}.jpg`}
        alt="Job posting preview"
        width={1050}
        height={1260}
        style={{ display: selected === "Meta" ? "flex" : "none" }}
        className={styles.image}
      />
      <Image
        src={`/${selected}.jpg`}
        alt="Job posting preview"
        width={1050}
        height={1260}
        style={{ display: selected === "Netflix" ? "flex" : "none" }}
        className={styles.image}
      />
      <Image
        src={`/${selected}.jpg`}
        alt="Job posting preview"
        width={1050}
        height={1260}
        style={{ display: selected === "Google" ? "flex" : "none" }}
        className={styles.image}
      />
    </>
  );
};
