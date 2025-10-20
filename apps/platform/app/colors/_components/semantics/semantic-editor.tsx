import { useRef } from "react";
import { useSemanticsForm } from "./semantic-form";
import { CanvasDrawer } from "@platform/components";
import { useClickOutside } from "@platform/hooks";
import { SemanticColorEditor } from "./semantic-color-editor";
import { SemanticGroupEditor } from "./semantic-group-editor";

export const SemanticEditor = () => {
  const { selectedEntity, blurColor } = useSemanticsForm();

  const editorRef = useRef<HTMLDivElement>(null);

  useClickOutside(editorRef, () => blurColor(), {
    excludeIdRegex: /semantic-no-close/,
  });

  if (!selectedEntity) {
    return null;
  }

  return (
    <CanvasDrawer.Root open={!!selectedEntity} ref={editorRef}>
      <SemanticColorEditor />
      <SemanticGroupEditor />
    </CanvasDrawer.Root>
  );
};
