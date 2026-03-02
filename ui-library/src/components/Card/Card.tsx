import * as React from "react";
import { cn } from "../../utils/cn";
import type { CardComponent, CardRootProps, CardSlotProps } from "./Card.types";

const CardRoot = <E extends React.ElementType = "section">(props: CardRootProps<E>) => {
  const {
    as,
    interactive = false,
    focusable = interactive,
    disabled = false,
    className,
    children,
    onPress,
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    ...rest
  } = props;

  const [focused, setFocused] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const Component = (as ?? "section") as React.ElementType;
  const state = { interactive, focused, active, disabled };
  const content = typeof children === "function" ? children(state) : children;

  const handleClick: React.MouseEventHandler = (event) => {
    onClick?.(event as never);
    if (interactive && !disabled) {
      onPress?.();
    }
  };

  const handleKeyDown: React.KeyboardEventHandler = (event) => {
    onKeyDown?.(event as never);
    if (!interactive || disabled) {
      return;
    }
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActive(true);
      onPress?.();
    }
  };

  return (
    <Component
      {...rest}
      className={cn(className)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onFocus={(event: React.FocusEvent) => {
        setFocused(true);
        onFocus?.(event as never);
      }}
      onBlur={(event: React.FocusEvent) => {
        setFocused(false);
        setActive(false);
        onBlur?.(event as never);
      }}
      role={interactive ? "button" : undefined}
      tabIndex={focusable && !disabled ? 0 : undefined}
      aria-disabled={interactive ? disabled : undefined}
      data-active={active ? "true" : undefined}
      data-disabled={disabled ? "true" : undefined}
    >
      {content}
    </Component>
  );
};

const Header = <E extends React.ElementType = "header">(props: CardSlotProps<E>) => {
  const { as, className, ...rest } = props;
  const Component = (as ?? "header") as React.ElementType;
  return <Component className={cn(className)} {...rest} />;
};

const Body = <E extends React.ElementType = "div">(props: CardSlotProps<E>) => {
  const { as, className, ...rest } = props;
  const Component = (as ?? "div") as React.ElementType;
  return <Component className={cn(className)} {...rest} />;
};

const Footer = <E extends React.ElementType = "footer">(props: CardSlotProps<E>) => {
  const { as, className, ...rest } = props;
  const Component = (as ?? "footer") as React.ElementType;
  return <Component className={cn(className)} {...rest} />;
};

export const Card = CardRoot as CardComponent;
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
