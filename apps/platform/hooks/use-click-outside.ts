import { RefObject } from "react";
import { useEventListener } from "./use-event-listener";

type Handler = (event: MouseEvent) => void;

export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: Handler,
  options?: {
    mouseEvent?: "mousedown" | "mouseup";
    excludeIdRegex?: RegExp;
  },
): void {
  const mouseEvent = options?.mouseEvent || "mousedown";
  const excludeIdRegex = options?.excludeIdRegex;

  useEventListener(mouseEvent, (event) => {
    const el = ref?.current;
    const target = event.target as Node;

    if (!el || el.contains(target)) {
      return;
    }

    if (excludeIdRegex) {
      let currentElement: HTMLElement | null = target as HTMLElement;
      while (currentElement) {
        if (currentElement.id && excludeIdRegex.test(currentElement.id)) {
          return;
        }
        currentElement = currentElement.parentElement;
      }
    }

    handler(event);
  });
}
