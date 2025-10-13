import { usePrimitivesForm } from "./primitives-form";
import { Input } from "@platform/components";

export const PrimitiveGroupEditor = () => {
  const { selectedEntity, handleChangePrimitiveGroupKey } = usePrimitivesForm();

  if (!selectedEntity || selectedEntity.type !== "group") return null;

  return (
    <div className="p-3 flex flex-col gap-4">
      <div className="w-full flex justify-between items-center gap-2">
        <p className="text-sm text-secondary">Group name</p>

        <Input
          value={selectedEntity.groupKey}
          variant="subtle"
          color={100}
          size={1}
          className="max-w-32"
          onChange={(e) => handleChangePrimitiveGroupKey(e.target.value)}
        />
      </div>
    </div>
  );
};
