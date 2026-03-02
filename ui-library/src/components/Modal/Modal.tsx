import * as React from "react";
import * as ReactDOM from "react-dom";
import { cn } from "../../utils/cn";
import type { ModalProps } from "./Modal.types";

const findFirstFocusable = (root: HTMLElement) => {
  const selectors = [
    "button:not([disabled])",
    "[href]",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])'
  ].join(",");

  return root.querySelector<HTMLElement>(selectors);
};

export const Modal = <E extends React.ElementType = "div">(props: ModalProps<E>) => {
  const {
    as,
    open,
    onOpenChange,
    title,
    children,
    closeOnOverlayClick = true,
    overlayClassName,
    contentClassName,
    closeButtonClassName,
    closeLabel = "Close dialog",
    ...rest
  } = props;

  const contentRef = React.useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const Component = (as ?? "div") as React.ElementType;
  const state = { open };
  const content = typeof children === "function" ? children(state) : children;
  const titleId = React.useId();

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!open) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onOpenChange(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onOpenChange]);

  React.useEffect(() => {
    if (!open || !contentRef.current) {
      return;
    }
    const firstFocusable = findFirstFocusable(contentRef.current);
    firstFocusable?.focus();
  }, [open]);

  if (!open || !mounted) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={cn(overlayClassName)}
      data-open="true"
      onClick={() => {
        if (closeOnOverlayClick) {
          onOpenChange(false);
        }
      }}
      role="presentation"
    >
      <Component
        {...rest}
        ref={contentRef}
        data-open="true"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        className={cn(contentClassName)}
        onClick={(event: React.MouseEvent) => event.stopPropagation()}
      >
        {title ? <h2 id={titleId}>{title}</h2> : null}
        {content}
        <button type="button" aria-label={closeLabel} className={cn(closeButtonClassName)} onClick={() => onOpenChange(false)}>
          Close
        </button>
      </Component>
    </div>,
    document.body
  );
};
