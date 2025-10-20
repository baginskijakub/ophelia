import { CanvasDrawer } from "@platform/components";
import { ButtonEditor } from "./button-editor";
import { VariantEditor } from "./variant";
import { SizeEditor } from "./size";

export const Editor = () => {
  return (
    <CanvasDrawer.Root open>
      <ButtonEditor />
      <VariantEditor />
      <SizeEditor />
    </CanvasDrawer.Root>
  );
};
