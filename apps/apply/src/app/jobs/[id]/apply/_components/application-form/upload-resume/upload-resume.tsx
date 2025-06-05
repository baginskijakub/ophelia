"use client";

import { useRef, useCallback, useMemo } from "react";
import { useDropFile } from "@ophelia/ui";
import { useForm } from "../../application-form/context";
import { Hovering, Idle, Loading, Success } from "./states";

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

  const Element = useMemo(() => {
    if (uploadState === "idle") {
      return <Idle ref={dropZoneRef}>{isDraggingOver && <Hovering />}</Idle>;
    }

    if (uploadState === "loading") {
      return <Loading />;
    }

    if (uploadState === "success") {
      return <Success />;
    }

    return null;
  }, [uploadState]);

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept=".pdf,.doc,.docx,.rtf,.txt"
      />

      {Element}
    </>
  );
};
