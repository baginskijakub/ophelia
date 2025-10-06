import { ColorIndicator } from "../../../components/color-indicator";
import { PrimitiveRef } from "@repo/types";
import { mockOpheliaConfig } from "../../config";
import React from "react";
import { cx } from "cva";

interface SemanticControlProps {
  semanticGroup: string;
  colorKey: string;
  primitiveRef: PrimitiveRef;
}

export const SemanticControl = (props: SemanticControlProps) => {
  const { semanticGroup, colorKey, primitiveRef } = props;
  const [selected, setSelected] = React.useState(false);

  const value = mockOpheliaConfig.themes[0]?.colors.primitives.find(
    (pri) => pri.key === primitiveRef.key,
  )?.values[primitiveRef.shade || "500"];

  if (!value) return null;

  return (
    <button
      className={cx(
        "w-40 p-2 bg-primary",
        "flex items-center gap-1",
        "text-xs font-mono text-secondary",
        "cursor-pointer",
        "surface-base",
        "outline-solid outline-0 outline-offset-5 outline-blue-500",
        !selected && "hover:outline-1",
        selected && "outline-2",
      )}
      onClick={() => setSelected(!selected)}
    >
      <ColorIndicator color={value} />
      <span className="text-left truncate flex-1">
        {semanticGroup}-{colorKey}
        const [currentColor, setCurrentColor] = useState(primitiveRef);
      </span>
    </button>
  );
};
