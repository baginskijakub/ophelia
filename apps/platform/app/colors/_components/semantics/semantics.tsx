"use client";

import { IconButton } from "@platform/components";
import { SemanticEditor } from "./semantic-editor";
import { SemanticGroupControl } from "./semantic-group-control";
import { useSemanticsForm } from "./semantic-form";
import { PlusIcon } from "lucide-react";

export const Semantics = () => {
  const { colors, handleAddSemanticGroup } = useSemanticsForm();

  return (
    <>
      <div className="flex min-w-full min-h-full justify-center items-center gap-4">
        <div className="flex gap-4" id="semantic-no-close">
          {colors.map((semanticGroup, idx) => (
            <SemanticGroupControl
              semanticGroup={semanticGroup}
              index={idx}
              key={`semantics-group-${idx}`}
            />
          ))}
        </div>

        <IconButton
          variant="surface"
          rounded="full"
          size="xs"
          onClick={handleAddSemanticGroup}
        >
          <PlusIcon size={12} />
        </IconButton>
      </div>

      <SemanticEditor />
    </>
  );
};
