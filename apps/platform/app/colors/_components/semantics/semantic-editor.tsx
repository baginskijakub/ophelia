import { cx } from "cva";
import { useSemanticsForm } from "./semantic-form";
import { Badge } from "../../../_components";
import { ColorIndicator, Input } from "../../../../components";
import { CheckIcon, XIcon } from "lucide-react";
import { useColorsForm } from "../colors-form";

export const SemanticEditor = () => {
  const { primitives } = useColorsForm();
  const { selectedColor } = useSemanticsForm();

  if (!selectedColor) {
    return null;
  }

  return (
    <div
      className={cx(
        "absolute top-0 right-0",
        "w-64 h-full p-3",
        "bg-primary border-l-[0.5px] border-primary-style",
        "flex flex-col gap-4",
      )}
    >
      <div className="text-md flex items-center gap-2">
        <ColorIndicator color={selectedColor.primitiveRef.value} />

        <span className="flex items-center gap-1">
          <Badge>{selectedColor.semanticGroup}</Badge>

          <XIcon size={14} className="text-tertiary" />

          <Badge>{selectedColor.colorKey}</Badge>
        </span>
      </div>

      <div className="flex-1 flex flex-col">
        <Input placeholder="Search" variant="subtle" size={1} />

        <div className="flex-1 flex flex-col">
          {primitives.map((primitiveGroup) =>
            Object.entries(primitiveGroup.values).map(([shade, value]) => (
              <PrimitiveSelect
                key={`${primitiveGroup.key}-${shade}`}
                primitiveGroup={primitiveGroup.key}
                colorKey={shade}
                value={value}
                selected={
                  selectedColor.primitiveRef.key === primitiveGroup.key &&
                  selectedColor.primitiveRef.shade === parseInt(shade)
                }
                onSelect={() => console.log("select")}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
};

interface PrimitiveSelectProps {
  primitiveGroup: string;
  colorKey: string;
  value: string;
  selected: boolean;
  onSelect: () => void;
}

const PrimitiveSelect = (props: PrimitiveSelectProps) => {
  const { primitiveGroup, colorKey, value, selected, onSelect } = props;

  return (
    <button
      className={cx(
        "w-full p-2",
        "flex items-center gap-2",
        "text-xs font-mono text-primary",
        "rounded-md",
        "cursor-pointer",
        selected && "bg-sky-50",
      )}
      onClick={onSelect}
    >
      <ColorIndicator color={value} />

      <span className="text-left truncate flex-1 text-secondary">
        {primitiveGroup}-{colorKey}
      </span>

      {selected && <CheckIcon size={14} className="text-sky-700" />}
    </button>
  );
};
