"use client";

import { Canvas } from "@platform/components";
import { ButtonsTable } from "./_components";
import { ButtonFormProvider } from "./_components/button-form";

export default function ButtonPage() {
  return (
    <Canvas.Root>
      <Canvas.Toolbar></Canvas.Toolbar>

      <Canvas.Content>
        <ButtonFormProvider>
          <ButtonsTable />
        </ButtonFormProvider>
      </Canvas.Content>
    </Canvas.Root>
  );
}
