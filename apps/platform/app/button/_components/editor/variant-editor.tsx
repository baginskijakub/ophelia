import { Badge, Input, ValueInput } from "@platform/components";
import { useButtonForm } from "../button-form";
import { HeadingIcon } from "lucide-react";

export const VariantEditor = () => {
  const { selectedEntity } = useButtonForm();

  if (!selectedEntity || selectedEntity.type !== "variant") {
    return null;
  }

  return (
    <div className="p-3 flex flex-col gap-4">
      <div className="flex gap-2 text-base">
        Variant
        <Badge color="300">{selectedEntity.variantKey}</Badge>
      </div>

      <ValueInput.Root>
        <HeadingIcon size={12} />
        <ValueInput.Input />
      </ValueInput.Root>
    </div>
  );
};
