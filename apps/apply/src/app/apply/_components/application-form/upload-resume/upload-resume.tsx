"use client";

import { useRef, useCallback } from "react";
import { useDropFile } from "@ophelia/ui";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "../../application-form/context";
import { Hovering, Idle, Loading, Success } from "./states";
import styles from "./upload-resume.module.css";

export const UploadResume = () => {
  const { selectedFile, setSelectedFile, uploadState } = useForm();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const handleFileProcessed = useCallback((file: File) => {
    setSelectedFile(file);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }, []);

  const { isDraggingOver } = useDropFile({
    targetRef: dropZoneRef,
    onDrop: handleFileProcessed,
  });

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      handleFileProcessed(file);
    }
  };

  const animationProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".pdf,.doc,.docx,.rtf,.txt"
      />

      <div className={styles.root}>
        <AnimatePresence mode="wait">
          {uploadState === "idle" && (
            <motion.div
              key="idle"
              {...animationProps}
              ref={dropZoneRef}
              className={styles.inner}
            >
              <Idle browseFiles={handleBrowseClick}>
                <Hovering hovering={isDraggingOver} />
              </Idle>
            </motion.div>
          )}

          {uploadState === "loading" && (
            <motion.div
              key="loading"
              {...animationProps}
              className={styles.inner}
            >
              <Loading />
            </motion.div>
          )}

          {uploadState === "success" && (
            <motion.div
              key="success"
              {...animationProps}
              className={styles.inner}
            >
              <Success browseFiles={handleBrowseClick} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
