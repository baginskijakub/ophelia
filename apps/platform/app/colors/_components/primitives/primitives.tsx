"use client";

import { Badge, IconButton } from "@platform/components";
import { PrimitiveShade } from "@repo/types";
import { PrimitveControl } from "./primitive-control";
import { usePrimitivesForm } from "./primitives-form";
import { PrimitiveEditor } from "./primitive-editor";
import { PlusIcon } from "lucide-react";
import { PrimitiveGroupControl } from "./primitive-group-control";

export const Primitives = () => {
  const { colors, handleAddPrimitiveGroup } = usePrimitivesForm();

  return (
    <>
      <div className="flex flex-1 justify-center items-center gap-4 p-8">
        {colors.map((primitiveGroup, idx) => (
          <div key={idx} className="flex flex-col gap-4 items-center">
            <PrimitiveGroupControl groupKey={primitiveGroup.key} />

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

        <IconButton
          variant="surface"
          rounded="full"
          onClick={handleAddPrimitiveGroup}
        >
          <PlusIcon size={16} />
        </IconButton>
      </div>

      <PrimitiveEditor />
    </>
  );
};
