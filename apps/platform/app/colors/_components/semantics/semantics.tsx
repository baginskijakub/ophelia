"use client";

import { SemanticControl } from "./semantic-control";
import { useColorsForm } from "../colors-form";
import { Badge } from "../../../_components";
import { SemanticEditor } from "./semantic-editor";

export const Semantics = () => {
  const { semantics } = useColorsForm();

  return (
    <>
      <div className="flex flex-1 justify-center gap-4 p-8">
        {semantics.map((semanticGroup, idx) => (
          <div key={idx} className="flex flex-col gap-4 items-center">
            <Badge>{semanticGroup.key}</Badge>

            <div className="flex flex-col gap-4">
              {semanticGroup.values.map((semantic, idx) => (
                <SemanticControl
                  key={idx}
                  semanticGroup={semanticGroup.key}
                  colorKey={semantic.key}
                  primitiveRef={semantic.primitiveRef}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <SemanticEditor />
    </>
  );
};
