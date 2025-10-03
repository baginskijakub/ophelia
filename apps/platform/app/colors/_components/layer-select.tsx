import { ChevronsUpDown } from "lucide-react";
import { Select } from "../../../components";
import { Badge } from "../../_components";

export type Layer = "primitive" | "semantic";

interface Props {
  layer: Layer;
  setLayer: (layer: Layer) => void;
}

export const LayerSelect = (props: Props) => {
  const { layer, setLayer } = props;

  const items = [
    { label: "primitive", value: "primitive" },
    { label: "semantic", value: "semantic" },
  ];

  return (
    <div className="absolute top-4 left-4">
      <Select.Root value={layer} onValueChange={setLayer}>
        <Select.Trigger>
          <Select.Value />

          <div className="bg-gray-100 px-2 py-1 rounded-md flex items-center justify-between border-primary min-w-[160px] ">
            <span className="flex items-center gap-2 text-sm text-secondary">
              Layer:
              <Badge color="300">{layer}</Badge>
            </span>

            <ChevronsUpDown className="text-gray-700" size={16} />
          </div>
        </Select.Trigger>

        <Select.Content className="w-40 mt-1">
          <Select.Viewport>
            {items.map((item) => (
              <Select.Item key={item.value} value={item.value}>
                {item.label}
                <Select.ItemIndicator>Check</Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </div>
  );
};
