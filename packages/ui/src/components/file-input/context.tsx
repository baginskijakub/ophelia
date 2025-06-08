"use client";

import React from "react";

type FileInputSize = 1 | 2;

interface FileInputContextValue {
  size: FileInputSize;
  placeholder: string;
  fileName?: string;
  onClear?: () => void;
}

export const FileInputContext =
  React.createContext<FileInputContextValue | null>(null);

export const useFileInput = () => {
  const context = React.useContext(FileInputContext);
  if (!context) {
    throw new Error(
      "FileInput components must be used within a <FileInput.Root> component."
    );
  }
  return context;
};
