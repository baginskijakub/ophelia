"use client";

import { Canvas } from "@platform/components";
import { Content } from "./content";
import { ButtonFormProvider } from "./_components";

export default function ButtonPage() {
  return (
    <ButtonFormProvider>
      <Canvas.Root>
        <Canvas.Toolbar></Canvas.Toolbar>

        <Canvas.Content>
          <Content />
        </Canvas.Content>
      </Canvas.Root>
    </ButtonFormProvider>
  );
}
