import * as React from "react";
import { cn } from "../../utils/cn";
import type { ToastProps } from "./Toast.types";

export const Toast = <E extends React.ElementType = "div">(props: ToastProps<E>) => {
  const {
    as,
    open,
    onOpenChange,
    duration = 3000,
    className,
    closeButtonClassName,
    closeLabel = "Dismiss notification",
    children,
    ...rest
  } = props;
  const Component = (as ?? "div") as React.ElementType;
  const state = { open };
  const content = typeof children === "function" ? children(state) : children;

  React.useEffect(() => {
    if (!open || !onOpenChange || duration <= 0) {
      return;
    }
    const timer = window.setTimeout(() => onOpenChange(false), duration);
    return () => window.clearTimeout(timer);
  }, [duration, onOpenChange, open]);

  if (!open) {
    return null;
  }

  return (
    <Component
      {...rest}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={cn(className)}
      data-open="true"
    >
      {content}
      {onOpenChange ? (
        <button
          type="button"
          aria-label={closeLabel}
          className={cn(closeButtonClassName)}
          onClick={() => onOpenChange(false)}
        >
          Dismiss
        </button>
      ) : null}
    </Component>
  );
};
