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
        id="primitives-no-close"
        className="flex min-w-full min-h-full justify-center items-center gap-4"
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
          size="xs"
          rounded="full"
          onClick={handleAddPrimitiveGroup}
        >
          <PlusIcon size={12} />
        </IconButton>
      </div>

      <PrimitiveEditor />
    </>
  );
};
