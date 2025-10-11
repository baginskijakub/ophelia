"use client";

import { Badge } from "@platform/components";
import { PrimitiveShade } from "@repo/types";
import { PrimitveControl } from "./primitive-control";
import { usePrimitivesForm } from "./primitives-form";
import { PrimitiveEditor } from "./primitive-editor";

export const Primitives = () => {
  const { colors } = usePrimitivesForm();

  return (
    <>
      <div className="flex flex-1 justify-center gap-4 p-8">
        {colors.map((primitiveGroup, idx) => (
          <div key={idx} className="flex flex-col gap-4 items-center">
            <Badge>{primitiveGroup.key}</Badge>

            <div className="flex flex-col gap-4">
              {Object.entries(primitiveGroup.values).map(([key, value]) => (
                <PrimitveControl
                  key={key}
                  groupKey={primitiveGroup.key}
                  shade={parseInt(key) as keyof PrimitiveShade}
                  value={value}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <PrimitiveEditor />
    </>
  );
};
