"use client";

import { Button, mapConfigToCssVars } from "@repo/dynamic";
import { buttonConfig, mockOpheliaConfig } from "./config";
import { useState } from "react";

export default function Home() {
  const [configState, setConfigState] = useState(buttonConfig);

  const cssVars = mapConfigToCssVars(mockOpheliaConfig);

  return (
    <div style={cssVars.light}>
      <Button config={configState}>Hello from docs app</Button>
    </div>
  );
}
