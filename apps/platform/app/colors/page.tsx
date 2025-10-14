"use client";

import { Canvas } from "@platform/components";
import { LayerSelect, ColorsFormProvider, Content } from "./_components";

export default function ColorsPage() {
  return (
    <ColorsFormProvider>
      <Canvas.Root>
        <Canvas.Toolbar>
          <LayerSelect />
        </Canvas.Toolbar>

        <Canvas.Content>
          <Content />
        </Canvas.Content>
      </Canvas.Root>
    </ColorsFormProvider>
  );
}
