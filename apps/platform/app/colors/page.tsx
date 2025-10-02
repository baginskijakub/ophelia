"use client";

import { ThemeConfig } from "@repo/types";
import { mockOpheliaConfig } from "../config";
import { Badge } from "../_components";
import { ColorControl } from "./_components";
import { Select } from "../../components";
import { ChevronsUpDown } from "lucide-react";

export default function ColorsPage() {
  const { primitives } = (mockOpheliaConfig.themes[0] as unknown as ThemeConfig)
    .colors;

  const layers = [
    {
      label: "semantic",
      value: "semantcic",
    },
    {
      label: "primitives",
      value: "primitives",
    },
  ];

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <Select.Root items={layers}>
        <Select.Trigger>
          <button className="bg-gray-100 px-3 py-2 rounded-md flex items-center justify-between min-w-[180px]">
            <span className="flex items-center gap-1 text-sm">
              Layer:
              <Badge>
                <Select.Value />
              </Badge>
            </span>

            <ChevronsUpDown className="text-gray-700" size={16} />
          </button>
        </Select.Trigger>
        <Select.Portal>
          <Select.Positioner align="start" side="bottom">
            <Select.Popup style={{ minWidth: 120 }}>
              {layers.map((layer) => (
                <Select.Item key={layer.value} value={layer.value}>
                  {layer.label}
                </Select.Item>
              ))}
            </Select.Popup>
          </Select.Positioner>
        </Select.Portal>
      </Select.Root>

      <div className="flex gap-4 p-8">
        {primitives.map((primitiveGroup, idx) => (
          <div key={idx} className="flex flex-col gap-4 items-center">
            <Badge>{primitiveGroup.key}</Badge>

            <div className="flex flex-col gap-4">
              {Object.entries(primitiveGroup.values).map(([key, value]) => (
                <ColorControl
                  key={key}
                  primitiveGroup={primitiveGroup.key}
                  colorKey={key}
                  value={value}
                  onChange={(newColor) =>
                    console.log(
                      `Change color ${primitiveGroup.key}-${key} to ${newColor}`,
                    )
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
