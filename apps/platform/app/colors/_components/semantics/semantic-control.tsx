import { PrimitiveRef } from "@repo/types";
import React from "react";
import { cx } from "@platform/utils";
import { useSemanticsForm } from "./semantic-form";
import { ColorIndicator } from "../../../../components";

interface SemanticControlProps {
  semanticGroup: string;
  colorKey: string;
  primitiveRef: PrimitiveRef;
}

export const SemanticControl = (props: SemanticControlProps) => {
  const { semanticGroup, colorKey, primitiveRef } = props;

  const { selectedColor, handleSelectColor } = useSemanticsForm();

  const isSelected =
    selectedColor?.semanticGroup === semanticGroup &&
    selectedColor?.colorKey === colorKey;

  return (
    <button
      className={cx(
        "w-40 p-2 bg-primary",
        "flex items-center gap-1",
        "text-xs font-mono text-secondary",
        "cursor-pointer transition-shadow",
        "surface-md",
        "hitbox",
        isSelected && "focus-ring",
      )}
      id="semantic-control"
      onClick={() => handleSelectColor(semanticGroup, colorKey)}
    >
      <ColorIndicator color={primitiveRef.value} />
      <span className="text-left truncate flex-1">
        {semanticGroup}-{colorKey}
      </span>
    </button>
  );
};
