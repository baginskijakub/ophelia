"use client";

import { Icon, Text } from "@ophelia/ui";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SLIDE_UP_VARIANTS } from "../animation-constants";
import styles from "./input.module.css";

interface InputProps {
  nextStep: () => void;
}

export const Input = (props: InputProps) => {
  const { nextStep } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);

    if (touched) {
      setError(validateWebsiteUrl(value));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateWebsiteUrl(url));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    const validationError = validateWebsiteUrl(url);
    setError(validationError);

    if (validationError) {
      return;
    }

    nextStep();
  };

  const hasError = error && touched;

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

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Paste link here"
            className={styles.input}
            id="website-link"
            ref={inputRef}
            value={url}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />

          <button className={styles.button} type="submit">
            <Icon
              className={styles.icon}
              name="chevron-right"
              color="brand"
              size="md"
            />
          </button>
        </div>

        {hasError && (
          <Text
            role="paragraph"
            size="sm"
            align="center"
            className={styles.errorText}
          >
            {error}
          </Text>
        )}
      </form>
    </motion.div>
  );
};

const validateWebsiteUrl = (url: string): string | null => {
  if (!url.trim()) {
    return "Please enter a website URL";
  }

  // Add protocol if missing
  const urlWithProtocol = url.startsWith("http") ? url : `https://${url}`;

  try {
    const urlObj = new URL(urlWithProtocol);
    // Check if it's a valid domain (has at least one dot)
    if (!urlObj.hostname.includes(".")) {
      return "Please enter a valid website URL";
    }
    return null;
  } catch {
    return "Please enter a valid website URL";
  }
};
