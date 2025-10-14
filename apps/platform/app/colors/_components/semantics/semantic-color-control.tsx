import { PrimitiveRef } from "@repo/types";
import React from "react";
import { cx } from "@platform/utils";
import { useSemanticsForm } from "./semantic-form";
import { ColorIndicator } from "../../../../components";

interface SemanticColorControlProps {
  groupIndex: number;
  groupKey: string;
  colorIndex: number;
  colorKey: string;
  primitiveRef: PrimitiveRef;
}

export const SemanticColorControl = (props: SemanticColorControlProps) => {
  const { groupIndex, groupKey, colorIndex, colorKey, primitiveRef } = props;

  const { selectedEntity, select } = useSemanticsForm();

  const isSelected =
    selectedEntity?.type === "color" &&
    selectedEntity?.groupKey === groupKey &&
    selectedEntity?.colorKey === colorKey;

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
      onClick={() =>
        select({
          type: "color",
          groupIndex,
          groupKey,
          colorKey,
          primitiveRef,
        })
      }
    >
      <ColorIndicator color={primitiveRef.value} />
      <span className="text-left truncate flex-1">
        {groupKey}-{colorKey}
      </span>
    </button>
  );
};
