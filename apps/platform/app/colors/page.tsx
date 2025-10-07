"use client";

import { LayerSelect, ColorsFormProvider, Content } from "./_components";

export default function ColorsPage() {
  return (
    <ColorsFormProvider>
      <div className="relative w-full h-full flex justify-center items-center">
        <LayerSelect />

        <Content />
      </div>
    </ColorsFormProvider>
  );
}
