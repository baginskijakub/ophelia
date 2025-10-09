import { useRef } from "react";
import { useSemanticsForm } from "./semantic-form";
import { Badge } from "../../../_components";
import { CheckIcon, SearchIcon } from "lucide-react";
import { useColorsForm } from "../colors-form";
import { cx } from "@platform/utils";
import { ColorIndicator, Input, Popover } from "@platform/components";
import { useClickOutside } from "@platform/hooks";

export const SemanticEditor = () => {
  const { primitives } = useColorsForm();
  const { selectedColor, blurColor } = useSemanticsForm();

  const editorRef = useRef<HTMLDivElement>(null);

  useClickOutside(editorRef, () => blurColor());

  if (!selectedColor) {
    return null;
  }

  return (
    <div
      className={cx(
        "w-64 h-full",
        "bg-primary border-l-[0.5px] border-primary-style",
        "flex flex-col",
      )}
    >
      <div className="p-3 flex flex-col gap-4">
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm text-secondary">Group</p>

          <Input
            value={selectedColor.semanticGroup}
            variant="subtle"
            color={100}
            size={1}
            disabled
            className="max-w-32"
            onChange={(e) => console.log(e)}
          />
        </div>

        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm text-secondary">Name</p>
          <Input
            value={selectedColor.colorKey}
            variant="outline"
            color={100}
            size={1}
            className="max-w-32"
            onChange={(e) => console.log(e)}
          />
        </div>

        <Popover.Root>
          <Popover.Trigger>
            <div className="w-full flex justify-between items-center gap-2">
              <p className="text-sm text-secondary">Color</p>

              <Badge color="100" size="md" className="w-32">
                <ColorIndicator color={selectedColor.primitiveRef.value} />

                <span className="flex items-center gap-1">
                  {selectedColor.primitiveRef.key}-
                  {selectedColor.primitiveRef.shade}
                </span>
              </Badge>
            </div>
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Content className="p-0">
              <div className="flex items-center gap-2 p-2 border-b-[0.5px] border-primary-style">
                <SearchIcon size={13} className="text-secondary" />
                <input
                  placeholder="Search"
                  className="text-sm focus:outline-none"
                />
              </div>

              <div className="h-[220px] p-1 flex flex-col overflow-y-auto border-b-[0.5px] border-primary-style">
                {primitives.map((primitiveGroup) =>
                  Object.entries(primitiveGroup.values).map(
                    ([shade, value]) => (
                      <PrimitiveSelect
                        key={`${primitiveGroup.key}-${shade}`}
                        primitiveGroup={primitiveGroup.key}
                        colorKey={shade}
                        value={value}
                        selected={
                          selectedColor.primitiveRef.key ===
                            primitiveGroup.key &&
                          selectedColor.primitiveRef.shade === parseInt(shade)
                        }
                        onSelect={() => console.log("select")}
                      />
                    ),
                  ),
                )}
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
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
        selected && "bg-sky-50",
        !selected && "cursor-pointer hover:bg-gray-100",
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
