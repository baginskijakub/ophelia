import { useMemo, useRef, useState } from "react";
import { useSemanticsForm } from "./semantic-form";
import { CheckIcon, SearchIcon } from "lucide-react";
import { useColorsForm } from "../colors-form";
import { cx } from "@platform/utils";
import {
  ColorIndicator,
  Input,
  Popover,
  Badge,
  CanvasDrawer,
} from "@platform/components";
import { useClickOutside } from "@platform/hooks";
import { PrimitiveShade } from "@repo/types";

export const SemanticEditor = () => {
  const {
    selectedColor,
    blurColor,
    handleColorKeyChange,
    handleSemanticGroupKeyChange,
  } = useSemanticsForm();

  const editorRef = useRef<HTMLDivElement>(null);

  useClickOutside(editorRef, () => blurColor(), {
    excludeIdRegex: /semantic-control|primitive-select/,
  });

  return (
    <CanvasDrawer open={!!selectedColor} ref={editorRef}>
      {selectedColor && (
        <div className="p-3 flex flex-col gap-4">
          <div className="w-full flex justify-between items-center gap-2">
            <p className="text-sm text-secondary">Group</p>

            <Input
              value={selectedColor.semanticGroup}
              variant="subtle"
              color={100}
              size={1}
              className="max-w-32"
              onChange={(e) => handleSemanticGroupKeyChange(e.target.value)}
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
              onChange={(e) => handleColorKeyChange(e.target.value)}
            />
          </div>

          <Popover.Root>
            <Popover.Trigger>
              <div className="w-full flex justify-between items-center gap-2">
                <p className="text-sm text-secondary">Color</p>

                <Badge variant="outline" color={100} size="md" className="w-32">
                  <ColorIndicator color={selectedColor.primitiveRef.value} />

                  <span className="flex items-center gap-1">
                    {selectedColor.primitiveRef.key}-
                    {selectedColor.primitiveRef.shade}
                  </span>
                </Badge>
              </div>
            </Popover.Trigger>

            <Popover.Portal>
              <Popover.Content className="p-0" id="primitive-select">
                <PrimitiveSelectPopover />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      )}
    </CanvasDrawer>
  );
};

/** Popover content for selecting a primitive color */

const PrimitiveSelectPopover = () => {
  const { primitives } = useColorsForm();
  const { selectedColor, handleColorValueChange } = useSemanticsForm();

  const [query, setQuery] = useState("");

  const filteredPrimitives = useMemo(() => {
    if (!query) return primitives;

    return primitives
      .map((group) => {
        const filteredValues = Object.fromEntries(
          Object.entries(group.values).filter(([shade]) =>
            `${group.key}-${shade}`.includes(query.toLowerCase()),
          ),
        );

        return { ...group, values: filteredValues };
      })
      .filter((group) => Object.keys(group.values).length > 0);
  }, [query, primitives]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase());
  };

  if (!selectedColor) {
    return null;
  }

  return (
    <>
      <div className="flex items-center gap-2 p-2 border-b-[0.5px] border-primary-style">
        <SearchIcon size={13} className="text-secondary" />
        <input
          value={query}
          onChange={handleSearchChange}
          placeholder="Search"
          className="text-sm focus:outline-none"
        />
      </div>

      <div className="h-[220px] p-1 flex flex-col overflow-y-auto border-b-[0.5px] border-primary-style">
        {filteredPrimitives.map((primitiveGroup) =>
          Object.entries(primitiveGroup.values).map(([shade, value]) => (
            <PrimitiveSelectItem
              key={`${primitiveGroup.key}-${shade}`}
              primitiveGroup={primitiveGroup.key}
              colorKey={shade}
              value={value}
              selected={
                selectedColor.primitiveRef.key === primitiveGroup.key &&
                selectedColor.primitiveRef.shade === parseInt(shade)
              }
              onSelect={() =>
                handleColorValueChange({
                  key: primitiveGroup.key,
                  shade: parseInt(shade) as keyof PrimitiveShade,
                  value,
                })
              }
            />
          )),
        )}
      </div>
    </>
  );
};

/** Single item in the primitive select list */

interface PrimitiveSelectItemProps {
  primitiveGroup: string;
  colorKey: string;
  value: string;
  selected: boolean;
  onSelect: () => void;
}

const PrimitiveSelectItem = (props: PrimitiveSelectItemProps) => {
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
