"use client";

import { useRef, useCallback } from "react";
import { Button, useDropFile } from "@ophelia/ui";
import { useForm } from "../../application-form/context";
import { Idle } from "./states/idle";

export const UploadResume = () => {
  const { selectedFile, setSelectedFile } = useForm();
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

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".pdf,.doc,.docx,.rtf,.txt"
      />

      <Idle ref={dropZoneRef} />

      <Button>Upload file</Button>
    </>
  );
};
