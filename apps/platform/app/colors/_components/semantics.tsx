"use client";

import { ThemeConfig } from "@repo/types";
import { Badge } from "../../_components";
import { mockOpheliaConfig } from "../../config";
import { SemanticControl } from "./semantic-control";

export const Semantics = () => {
  const { semantics } = (mockOpheliaConfig.themes[0] as unknown as ThemeConfig)
    .colors;

  return (
    <div className="flex gap-4 p-8">
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
  );
};
