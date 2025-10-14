import { IconButton, Menu } from "@platform/components";
import { Ellipsis, TrashIcon } from "lucide-react";
import { usePrimitivesForm } from "./primitives-form";

export const PrimitivesMenu = () => {
  const { selectedEntity, handleDeletePrimitiveGroup } = usePrimitivesForm();

  if (!selectedEntity) return null;

  return (
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
          id="primitives-no-close"
        >
          <Menu.Group>
            <Menu.Item
              onClick={() =>
                handleDeletePrimitiveGroup(selectedEntity.groupIndex)
              }
            >
              <TrashIcon size={14} className="text-secondary" />
              Delete group
            </Menu.Item>
          </Menu.Group>
        </Menu.Content>
      </Menu.Portal>
    </Menu.Root>
  );
};
