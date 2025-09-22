import { HTMLAttributes, useState } from "react";
import { createPortal } from "react-dom";
import { useSafeLayoutEffect } from "../../hooks";
import { ReactRef } from "../types";

interface PortalProps extends HTMLAttributes<HTMLDivElement> {
  container?: Element | DocumentFragment | null;
  ref?: ReactRef<HTMLDivElement>;
}

export const Portal = (props: PortalProps) => {
  const { ref, container: containerProp, ...portalProps } = props;
  const [mounted, setMounted] = useState(false);

  useSafeLayoutEffect(() => setMounted(true), []);

  const container = containerProp || (mounted && globalThis?.document?.body);

  return container
    ? createPortal(<div {...portalProps} ref={ref} />, container)
    : null;
};
