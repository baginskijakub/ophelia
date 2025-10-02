"use client";

import { ThemeConfig } from "@repo/types";
import { mockOpheliaConfig } from "../config";
import { Badge } from "../_components";
import { ColorControl } from "./_components";
import { Menu, Popover } from "@base-ui-components/react";

export default function ColorsPage() {
  const { primitives } = (mockOpheliaConfig.themes[0] as unknown as ThemeConfig)
    .colors;

  return (
    <div className="relative w-full h-full flex justify-center items-center">
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
