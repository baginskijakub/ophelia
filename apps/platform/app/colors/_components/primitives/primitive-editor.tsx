import { useRef } from "react";
import { usePrimitivesForm } from "./primitives-form";
import { CanvasDrawer } from "@platform/components";
import { useClickOutside } from "@platform/hooks";
import { PrimitiveColorEditor } from "./primitive-color-editor";
import { PrimitiveGroupEditor } from "./primitive-group-editor";

export const PrimitiveEditor = () => {
  const { selectedEntity, blurColor } = usePrimitivesForm();

  const editorRef = useRef<HTMLDivElement>(null);

  useClickOutside(editorRef, () => blurColor(), {
    excludeIdRegex: /primitives-container/,
  });

  return (
    <CanvasDrawer open={!!selectedEntity} ref={editorRef}>
      <PrimitiveColorEditor />
      <PrimitiveGroupEditor />
    </CanvasDrawer>
  );
};
