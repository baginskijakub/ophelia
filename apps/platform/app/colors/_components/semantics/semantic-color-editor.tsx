import { useMemo, useState } from "react";
import { useSemanticsForm } from "./semantic-form";
import {
  CheckIcon,
  CopyMinus,
  Ellipsis,
  SearchIcon,
  TrashIcon,
} from "lucide-react";
import { useColorsForm } from "../colors-form";
import { cx } from "@platform/utils";
import {
  ColorIndicator,
  Input,
  Popover,
  Badge,
  Menu,
  IconButton,
  CanvasDrawer,
} from "@platform/components";
import { PrimitiveShade } from "@repo/types";

export const SemanticColorEditor = () => {
  const {
    selectedEntity,
    handleColorKeyChange,
    handleSemanticGroupKeyChange,
    handleDeleteSemanticGroup,
    handleDeleteColor,
  } = useSemanticsForm();

  if (!selectedEntity || selectedEntity.type !== "color") {
    return null;
  }

  return (
    <>
      <CanvasDrawer.Group className="flex-row justify-between">
        <Badge size="sm" color="200" className="text-nowrap">
          <ColorIndicator
            color={selectedEntity.primitiveRef.value}
            className="mr-2"
          />
          {selectedEntity.groupKey}-{selectedEntity.colorKey}
        </Badge>

        <Menu.Root>
          <Menu.Trigger asChild>
            <IconButton size="xs" variant="ghost">
              <Ellipsis size={16} />
            </IconButton>
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Content
              side="bottom"
              align="end"
              sideOffset={4}
              alignOffset={-4}
              id="semantic-no-close"
            >
              <Menu.Group>
                <Menu.Item onClick={() => handleDeleteColor()}>
                  <TrashIcon size={14} className="text-secondary" />
                  Delete color
                </Menu.Item>
                <Menu.Item onClick={() => handleDeleteSemanticGroup()}>
                  <CopyMinus size={14} className="text-secondary" />
                  Delete group
                </Menu.Item>
              </Menu.Group>
            </Menu.Content>
          </Menu.Portal>
        </Menu.Root>
      </CanvasDrawer.Group>

      <CanvasDrawer.Group>
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm text-secondary">Group</p>

          <Input
            value={selectedEntity.groupKey}
            variant="subtle"
            color="300"
            size={1}
            className="max-w-32"
            onChange={(e) => handleSemanticGroupKeyChange(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm text-secondary">Name</p>
          <Input
            value={selectedEntity.colorKey}
            variant="outline"
            color="300"
            size={1}
            className="max-w-32"
            onChange={(e) => handleColorKeyChange(e.target.value)}
          />
        </div>

        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm text-secondary">Color</p>

          <Popover.Root>
            <Popover.Trigger>
              <Badge variant="subtle" color={"300"} size="md" className="w-32">
                <ColorIndicator color={selectedEntity.primitiveRef.value} />

                <span className="flex items-center gap-1">
                  {selectedEntity.primitiveRef.key}-
                  {selectedEntity.primitiveRef.shade}
                </span>
              </Badge>
            </Popover.Trigger>

            <Popover.Portal>
              <Popover.Content
                className="p-0 w-48"
                id="semantic-no-close"
                side="left"
                align="start"
                alignOffset={-4}
              >
                <PrimitiveSelectPopover />
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </CanvasDrawer.Group>
    </>
  );
};

/** Popover content for selecting a primitive color */

const PrimitiveSelectPopover = () => {
  const { primitives } = useColorsForm();
  const { selectedEntity, handleColorValueChange } = useSemanticsForm();

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

  if (!selectedEntity || selectedEntity.type !== "color") {
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
                selectedEntity.primitiveRef.key === primitiveGroup.key &&
                selectedEntity.primitiveRef.shade === parseInt(shade)
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
