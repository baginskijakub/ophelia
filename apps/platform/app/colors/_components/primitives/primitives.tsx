"use client";

import { ThemeConfig } from "@repo/types";
import { Badge } from "../../../_components";
import { mockOpheliaConfig } from "../../../config";
import { PrimitveControl } from "./primitive-control";

export const Primitives = () => {
  const { primitives } = (mockOpheliaConfig.themes[0] as unknown as ThemeConfig)
    .colors;

  return (
    <div className="flex gap-4 p-8">
      {primitives.map((primitiveGroup, idx) => (
        <div key={idx} className="flex flex-col gap-4 items-center">
          <Badge>{primitiveGroup.key}</Badge>

          <div className="flex flex-col gap-4">
            {Object.entries(primitiveGroup.values).map(([key, value]) => (
              <PrimitveControl
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
  );
};
