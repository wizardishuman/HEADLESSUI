import * as React from "react";

export const useOnClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void,
  enabled: boolean
) => {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current) {
        return;
      }
      if (!ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [enabled, handler, ref]);
};
