import { CanvasDrawer } from "@platform/components";
import { ButtonEditor } from "./button-editor";
import { VariantEditor } from "./variant";
import { SizeEditor } from "./size";
import { useButtonForm } from "../button-form";
import { useRef } from "react";
import { useClickOutside } from "@platform/hooks";

export const Editor = () => {
  const { selectedEntity, selectEntity } = useButtonForm();

  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(
    ref,
    () => {
      selectEntity(undefined);
    },
    {
      excludeIdRegex: /buttons-no-close/,
    },
  );

  return (
    <CanvasDrawer.Root
      ref={ref}
      id="buttons-no-close"
      open={Boolean(selectedEntity)}
    >
      <ButtonEditor />
      <VariantEditor />
      <SizeEditor />
    </CanvasDrawer.Root>
  );
};
