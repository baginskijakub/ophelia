import { CanvasDrawer } from "@platform/components";
import { ButtonEditor } from "./button-editor";
import { VariantEditor } from "./variant";
import { SizeEditor } from "./size";
import { useButtonForm } from "../button-form";

export const Editor = () => {
  const { selectedEntity } = useButtonForm();

  return (
    <CanvasDrawer.Root open={Boolean(selectedEntity)}>
      <ButtonEditor />
      <VariantEditor />
      <SizeEditor />
    </CanvasDrawer.Root>
  );
};
