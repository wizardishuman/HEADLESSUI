import * as React from "react";
import { useControllableState } from "../../hooks";
import { useOnClickOutside } from "../../hooks";
import { cn } from "../../utils/cn";
import type {
  DropdownComponent,
  DropdownItemProps,
  DropdownMenuProps,
  DropdownRootProps,
  DropdownState,
  DropdownTriggerProps
} from "./Dropdown.types";

type DropdownContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  triggerRef: React.RefObject<HTMLElement>;
  menuRef: React.RefObject<HTMLElement>;
  rootRef: React.RefObject<HTMLElement>;
};

const DropdownContext = React.createContext<DropdownContextValue | null>(null);

const useDropdownContext = () => {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error("Dropdown slots must be used inside <Dropdown>.");
  }
  return context;
};

const getEnabledMenuItems = (menu: HTMLElement | null) => {
  if (!menu) {
    return [] as HTMLElement[];
  }
  const all = Array.from(menu.querySelectorAll<HTMLElement>('[role="menuitem"]'));
  return all.filter((item) => item.getAttribute("aria-disabled") !== "true");
};

const DropdownRoot = <E extends React.ElementType = "div">(props: DropdownRootProps<E>) => {
  const { as, open, defaultOpen = false, onOpenChange, className, children, ...rest } = props;
  const [isOpen, setIsOpen] = useControllableState<boolean>({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange
  });
  const [activeIndex, setActiveIndex] = React.useState(0);
  const rootRef = React.useRef<HTMLElement>(null);
  const triggerRef = React.useRef<HTMLElement>(null);
  const menuRef = React.useRef<HTMLElement>(null);
  const Component = (as ?? "div") as React.ElementType;

  useOnClickOutside(rootRef, () => setIsOpen(false), isOpen);

  return (
    <DropdownContext.Provider
      value={{
        open: isOpen,
        setOpen: setIsOpen,
        activeIndex,
        setActiveIndex,
        triggerRef,
        menuRef,
        rootRef
      }}
    >
      <Component
        {...rest}
        ref={rootRef}
        className={cn(className)}
        data-open={isOpen ? "true" : undefined}
        data-active={isOpen ? "true" : undefined}
      >
        {children}
      </Component>
    </DropdownContext.Provider>
  );
};

const Trigger = <E extends React.ElementType = "button">(props: DropdownTriggerProps<E>) => {
  const { as, className, children, onClick, onKeyDown, ...rest } = props;
  const Component = (as ?? "button") as React.ElementType;
  const { open, setOpen, setActiveIndex, menuRef, triggerRef } = useDropdownContext();
  const state: DropdownState = { open };
  const content = typeof children === "function" ? children(state) : children;

  return (
    <Component
      {...rest}
      ref={triggerRef}
      className={cn(className)}
      type={Component === "button" ? "button" : undefined}
      aria-expanded={open}
      aria-haspopup="menu"
      data-open={open ? "true" : undefined}
      onClick={(event: React.MouseEvent) => {
        onClick?.(event as never);
        setOpen(!open);
      }}
      onKeyDown={(event: React.KeyboardEvent) => {
        onKeyDown?.(event as never);
        if (event.key === "ArrowDown") {
          event.preventDefault();
          setOpen(true);
          setActiveIndex(0);
          const items = getEnabledMenuItems(menuRef.current);
          items[0]?.focus();
        }
      }}
    >
      {content}
    </Component>
  );
};

const Menu = <E extends React.ElementType = "div">(props: DropdownMenuProps<E>) => {
  const { as, className, children, onKeyDown, ...rest } = props;
  const Component = (as ?? "div") as React.ElementType;
  const { open, setOpen, menuRef, triggerRef, activeIndex, setActiveIndex } = useDropdownContext();

  if (!open) {
    return null;
  }

  return (
    <Component
      {...rest}
      ref={menuRef}
      role="menu"
      className={cn(className)}
      data-open="true"
      onKeyDown={(event: React.KeyboardEvent) => {
        onKeyDown?.(event as never);
        const items = getEnabledMenuItems(menuRef.current);
        if (!items.length) {
          return;
        }
        if (event.key === "Escape") {
          event.preventDefault();
          setOpen(false);
          triggerRef.current?.focus();
          return;
        }
        if (event.key === "ArrowDown") {
          event.preventDefault();
          const next = (activeIndex + 1) % items.length;
          setActiveIndex(next);
          items[next]?.focus();
          return;
        }
        if (event.key === "ArrowUp") {
          event.preventDefault();
          const next = (activeIndex - 1 + items.length) % items.length;
          setActiveIndex(next);
          items[next]?.focus();
        }
      }}
    >
      {children}
    </Component>
  );
};

const Item = <E extends React.ElementType = "button">(props: DropdownItemProps<E>) => {
  const { as, className, disabled = false, onSelect, children, onClick, onMouseEnter, ...rest } = props;
  const Component = (as ?? "button") as React.ElementType;
  const { setOpen, activeIndex, setActiveIndex, menuRef } = useDropdownContext();
  const itemRef = React.useRef<HTMLElement>(null);
  const [itemIndex, setItemIndex] = React.useState(-1);
  const active = itemIndex === activeIndex;
  const content = typeof children === "function" ? children({ active, disabled }) : children;

  React.useEffect(() => {
    if (!menuRef.current || !itemRef.current) {
      return;
    }
    const items = getEnabledMenuItems(menuRef.current);
    const index = items.indexOf(itemRef.current);
    setItemIndex(index);
  }, [menuRef, disabled, children]);

  return (
    <Component
      {...rest}
      ref={itemRef}
      role="menuitem"
      type={Component === "button" ? "button" : undefined}
      className={cn(className)}
      tabIndex={-1}
      aria-disabled={disabled || undefined}
      data-active={active ? "true" : undefined}
      data-disabled={disabled ? "true" : undefined}
      onMouseEnter={(event: React.MouseEvent) => {
        onMouseEnter?.(event as never);
        if (itemIndex >= 0) {
          setActiveIndex(itemIndex);
        }
      }}
      onClick={(event: React.MouseEvent) => {
        onClick?.(event as never);
        if (disabled) {
          event.preventDefault();
          return;
        }
        onSelect?.();
        setOpen(false);
      }}
    >
      {content}
    </Component>
  );
};

export const Dropdown = DropdownRoot as DropdownComponent;
Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
