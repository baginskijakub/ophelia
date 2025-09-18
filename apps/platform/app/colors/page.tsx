"use client";

import { ThemeConfig } from "@repo/types";
import { mockOpheliaConfig } from "../config";
import { Badge } from "../_components";

export default function ColorsPage() {
  const { primitives } = (mockOpheliaConfig.themes[0] as unknown as ThemeConfig)
    .colors;

  return (
    <div className="flex gap-4 p-8">
      {primitives.map((primitiveGroup, idx) => (
        <div key={idx} className="flex flex-col gap-4 items-center">
          <Badge>{primitiveGroup.key}</Badge>

          <div className="flex flex-col gap-4">
            {Object.entries(primitiveGroup.values).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center gap-1 text-xs font-mono px-3 py-2 rounded bg-gray-200 text-gray-500"
              >
                <span
                  className="w-3 h-3 inline-flex rounded-full"
                  style={{ backgroundColor: value }}
                />
                {primitiveGroup.key}-{key}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
