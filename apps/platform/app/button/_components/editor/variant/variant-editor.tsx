import { Badge, CanvasDrawer, ValueInput } from "@platform/components";
import { useButtonForm } from "../../button-form";
import { HeadingIcon } from "lucide-react";

export const VariantEditor = () => {
  const { selectedEntity } = useButtonForm();

  if (!selectedEntity || selectedEntity.type !== "column") {
    return null;
  }

  return (
    <CanvasDrawer.Group>
      <div className="flex gap-2 text-base">
        Variant
        <Badge color="300">{selectedEntity.columnId}</Badge>
      </div>

      <ValueInput.Root>
        <ValueInput.Label>Background</ValueInput.Label>
        <ValueInput.InputGroup>
          <HeadingIcon size={12} />
          <ValueInput.Input />
        </ValueInput.InputGroup>
      </ValueInput.Root>
    </CanvasDrawer.Group>
  );
};
