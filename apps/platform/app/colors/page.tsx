"use client";

import { useState } from "react";
import { Primitives, Semantics, Layer, LayerSelect } from "./_components";

export default function ColorsPage() {
  const [layer, setLayer] = useState<Layer>("primitive");

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <LayerSelect layer={layer} setLayer={setLayer} />

      {layer === "primitive" ? <Primitives /> : <Semantics />}
    </div>
  );
}
