"use client";

import { useState } from "react";
import { Primitives, Semantics, Layer, LayerSelect } from "./_components";
import { cx } from "cva";
import { Badge } from "../_components";
import { ColorIndicator } from "../../components";
import { ColorPicker } from "./_components/color-picker";

export default function ColorsPage() {
  const [layer, setLayer] = useState<Layer>("primitive");

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <LayerSelect layer={layer} setLayer={setLayer} />

      {layer === "primitive" ? <Primitives /> : <Semantics />}

      <div
        className={cx(
          "absolute top-0 right-0",
          "w-64 h-full p-3",
          "bg-primary border-l-[0.5px] border-primary-style",
          "flex flex-col",
        )}
      >
        <Badge color="200" className="flex items-center gap-2">
          <ColorIndicator color="#464CE7" />
          neutral-900
        </Badge>

        <ColorPicker.Root color={"#464CE7"} onChange={(v) => console.log(v)}>
          <ColorPicker.ColorInput />
          <ColorPicker.SaturationLightnessPicker />
          <ColorPicker.HueSlider />
        </ColorPicker.Root>
      </div>
    </div>
  );
}
