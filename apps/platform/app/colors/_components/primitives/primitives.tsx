"use client";

import { IconButton } from "@platform/components";
import { usePrimitivesForm } from "./primitives-form";
import { PrimitiveEditor } from "./primitive-editor";
import { PlusIcon } from "lucide-react";
import { PrimitiveGroupControl } from "./primitive-group-control";

export const Primitives = () => {
  const { colors, handleAddPrimitiveGroup } = usePrimitivesForm();

  return (
    <>
      <div
        className="flex justify-center items-center gap-4"
        id="primitives-container"
      >
        {colors.map((primitiveGroup, idx) => (
          <PrimitiveGroupControl
            primitiveGroup={primitiveGroup}
            key={idx}
            index={idx}
          />
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
