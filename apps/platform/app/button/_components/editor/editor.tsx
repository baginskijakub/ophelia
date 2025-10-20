import { CanvasDrawer } from "@platform/components";
import { ButtonEditor } from "./button-editor";
import { VariantEditor } from "./variant-editor";
import { SizeEditor } from "./size-editor";

export const Editor = () => {
  return (
    <CanvasDrawer open>
      <ButtonEditor />
      <VariantEditor />
      <SizeEditor />
    </CanvasDrawer>
  );
};
