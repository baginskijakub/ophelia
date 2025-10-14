"use client";

import { Canvas } from "@platform/components";
import { LayerSelect, ColorsFormProvider, Content } from "./_components";

export default function ColorsPage() {
  return (
    <ColorsFormProvider>
      <div className="relative w-full h-full flex justify-center items-center">
        <Canvas.Root>
          <Canvas.Toolbar>
            <LayerSelect />
          </Canvas.Toolbar>

          <Canvas.Content>
            <Content />
          </Canvas.Content>
        </Canvas.Root>
      </div>
    </ColorsFormProvider>
  );
}
