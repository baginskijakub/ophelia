"use client";

import { useState, useRef, useCallback } from "react";
import { Flex, Icon, Text, useDropFile } from "@ophelia/ui";
import { DragDrop } from "./drag-drop";
import { BrowseFiles } from "./browse-files";
import styles from "./resume-step.module.css";
import { FileUploaded } from "./file-uploaded";
import { useForm } from "../../application-form/context";

export const ResumeStep = () => {
  const { selectedFile, setSelectedFile } = useForm();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropZoneRef = useRef<HTMLDivElement>(null);

  const handleFileProcessed = useCallback((file: File) => {
    setSelectedFile(file);
    console.log("File processed:", file);

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

  if (selectedFile) {
    return <FileUploaded />;
  }

  return (
    <Flex direction="column" gap={8}>
      <Flex direction="column" align="center" gap={4} fullWidth>
        <Icon name="sparkles" size="xl" className={styles["header-icon"]} />
        <Text role="heading" size="sm" align="center">
          Upload your resume and we will fill out the application for you.
        </Text>
      </Flex>

      <div
        ref={dropZoneRef}
        className={`${styles["upload-root"]} ${
          isDraggingOver ? styles["dragging-over-active"] : ""
        }`}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
          accept=".pdf,.doc,.docx,.rtf,.txt"
        />

        <DragDrop isDraggingOver={isDraggingOver} />

        <div className={styles["upload-root-center"]}>
          <span className={styles.separator} />
          <Text role="paragraph" size="sm">
            OR
          </Text>
          <span className={styles.separator} />
        </div>

        <BrowseFiles onBrowseClick={handleBrowseClick} />
      </div>
    </Flex>
  );
};
