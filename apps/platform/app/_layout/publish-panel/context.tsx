"use client";

import React, { Dispatch, PropsWithChildren, SetStateAction } from "react";

type PanelStatus = "no-changes" | "review" | "publishing" | "published";

interface PublishPanelContextValue {
  status: PanelStatus;
  setStatus: Dispatch<SetStateAction<PanelStatus>>;
  open: boolean;
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  handlePublishClick: () => void;
}

const PublishPanelContext = React.createContext({} as PublishPanelContextValue);

export const PublishPanelProvider = (props: PropsWithChildren) => {
  const [status, setStatus] = React.useState<PanelStatus>("no-changes");
  const [open, setOpen] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handlePublishClick = () => {
    if (!open) {
      setOpen(true);

      if (textareaRef.current) {
        textareaRef.current.focus();
      }

      return;
    }

    if (status === "review") {
      setStatus("publishing");
    }
  };

  return (
    <PublishPanelContext.Provider
      value={{
        status,
        setStatus,
        open,
        textareaRef,
        handlePublishClick,
      }}
    >
      {props.children}
    </PublishPanelContext.Provider>
  );
};

export const usePublishPanel = () => {
  const ctx = React.useContext(PublishPanelContext);

  if (!ctx) {
    throw new Error(
      "usePublishPanelContext must be used within a PublishPanelProvider",
    );
  }

  return ctx;
};
