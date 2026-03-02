import * as React from "react";
import { cn } from "../../utils/cn";
import type { ButtonProps, ButtonState } from "./Button.types";

export const Button = <E extends React.ElementType = "button">(props: ButtonProps<E>) => {
  const {
    as,
    loading = false,
    disabled = false,
    className,
    children,
    render,
    onClick,
    onKeyDown,
    ...rest
  } = props;

  const Component = (as ?? "button") as React.ElementType;
  const isNativeButton = Component === "button";
  const computedDisabled = disabled || loading;
  const state: ButtonState = { loading, disabled: computedDisabled };

  const content = typeof children === "function" ? children(state) : children;

  const handleClick: React.MouseEventHandler = (event) => {
    if (computedDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick?.(event as never);
  };

  const handleKeyDown: React.KeyboardEventHandler = (event) => {
    onKeyDown?.(event as never);
    if (isNativeButton || computedDisabled) {
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      (onClick as React.MouseEventHandler | undefined)?.(event as unknown as React.MouseEvent);
    }
  };

  const elementProps = {
    ...rest,
    className: cn(className),
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    "aria-busy": loading || undefined,
    "aria-disabled": !isNativeButton ? computedDisabled : undefined,
    "data-loading": loading ? "true" : undefined,
    "data-disabled": computedDisabled ? "true" : undefined,
    role: !isNativeButton ? "button" : undefined,
    tabIndex: !isNativeButton ? (computedDisabled ? -1 : 0) : undefined,
    disabled: isNativeButton ? computedDisabled : undefined
  };

  if (render) {
    return <>{render({ state, props: elementProps })}</>;
  }

  return <Component {...elementProps}>{content}</Component>;
};
