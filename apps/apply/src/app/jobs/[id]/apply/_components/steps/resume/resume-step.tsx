import { useState, useRef } from "react";
import { Button, Flex, Icon, Text } from "@ophelia/ui";
import styles from "./resume-step.module.css";

export const ResumeStep = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (
      event.dataTransfer.types &&
      event.dataTransfer.types.includes("Files")
    ) {
      setIsDraggingOver(true);
    }
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (
      event.relatedTarget === null ||
      !event.currentTarget.contains(event.relatedTarget as Node)
    ) {
      setIsDraggingOver(false);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (
      event.dataTransfer.types &&
      event.dataTransfer.types.includes("Files")
    ) {
      if (!isDraggingOver) {
        setIsDraggingOver(true);
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDraggingOver(false);
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      const file = event.dataTransfer.files[0];
      setSelectedFile(file);
      console.log("File dropped:", file);
    }
  };

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);
      console.log("File selected via browse:", file);
    }
  };

  if (selectedFile) {
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
        className={styles["upload-root"]}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        <div className={styles["upload-root-inner"]}>
          <Icon name="upload" size="lg" className={styles["upload-icon"]} />
          <Text role="label" size="md" color="brand">
            {isDraggingOver ? "Drop file here" : "Drag and drop"}
          </Text>
        </div>

        <div className={styles["upload-root-center"]}>
          <span className={styles.separator} />
          <Text role="paragraph" size="sm">
            OR
          </Text>
          <span className={styles.separator} />
        </div>

        <div className={styles["upload-root-inner"]}>
          <Text role="label" size="md" color="brand">
            Choose a file from your computer
          </Text>
          <Button size="sm" variant="solid" onClick={handleBrowseClick}>
            Browse files
          </Button>
        </div>
      </div>
    </Flex>
  );
};
