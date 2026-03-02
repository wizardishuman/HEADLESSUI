import * as React from "react";
import { useControllableState } from "../../hooks";
import { cn } from "../../utils/cn";
import type { TabsComponent, TabsContentProps, TabsListProps, TabsRootProps, TabsTriggerProps } from "./Tabs.types";

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
  listRef: React.RefObject<HTMLElement>;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs slots must be used inside <Tabs>.");
  }
  return context;
};

const TabsRoot = <E extends React.ElementType = "div">(props: TabsRootProps<E>) => {
  const { as, value, defaultValue = "", onValueChange, className, children, ...rest } = props;
  const [selected, setSelected] = useControllableState<string>({
    value,
    defaultValue,
    onChange: onValueChange
  });
  const listRef = React.useRef<HTMLElement>(null);
  const Component = (as ?? "div") as React.ElementType;

  return (
    <TabsContext.Provider value={{ value: selected, setValue: setSelected, listRef }}>
      <Component {...rest} className={cn(className)}>
        {children}
      </Component>
    </TabsContext.Provider>
  );
};

const List = <E extends React.ElementType = "div">(props: TabsListProps<E>) => {
  const { as, className, children, ...rest } = props;
  const { listRef } = useTabsContext();
  const Component = (as ?? "div") as React.ElementType;
  return (
    <Component {...rest} ref={listRef} role="tablist" className={cn(className)}>
      {children}
    </Component>
  );
};

const Trigger = <E extends React.ElementType = "button">(props: TabsTriggerProps<E>) => {
  const { as, value, className, disabled = false, children, onClick, onKeyDown, ...rest } = props;
  const { value: selected, setValue, listRef } = useTabsContext();
  const Component = (as ?? "button") as React.ElementType;
  const active = selected === value;
  const content = typeof children === "function" ? children({ active, disabled }) : children;

  return (
    <Component
      {...rest}
      role="tab"
      type={Component === "button" ? "button" : undefined}
      id={`tab-${value}`}
      aria-controls={`panel-${value}`}
      aria-selected={active}
      aria-disabled={disabled || undefined}
      tabIndex={active ? 0 : -1}
      data-active={active ? "true" : undefined}
      data-disabled={disabled ? "true" : undefined}
      className={cn(className)}
      onClick={(event: React.MouseEvent) => {
        onClick?.(event as never);
        if (!disabled) {
          setValue(value);
        }
      }}
      onKeyDown={(event: React.KeyboardEvent) => {
        onKeyDown?.(event as never);
        if (!listRef.current) {
          return;
        }
        const triggers = Array.from(listRef.current.querySelectorAll<HTMLElement>('[role="tab"]')).filter(
          (tab) => tab.getAttribute("aria-disabled") !== "true"
        );
        const index = triggers.findIndex((tab) => tab.id === `tab-${value}`);
        if (index < 0) {
          return;
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          triggers[(index + 1) % triggers.length]?.focus();
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          triggers[(index - 1 + triggers.length) % triggers.length]?.focus();
        }
      }}
    >
      {content}
    </Component>
  );
};

const Content = <E extends React.ElementType = "div">(props: TabsContentProps<E>) => {
  const { as, value, className, forceMount = false, children, ...rest } = props;
  const { value: selected } = useTabsContext();
  const Component = (as ?? "div") as React.ElementType;
  const active = selected === value;

  if (!active && !forceMount) {
    return null;
  }

  return (
    <Component
      {...rest}
      role="tabpanel"
      hidden={!active}
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      data-active={active ? "true" : undefined}
      className={cn(className)}
    >
      {children}
    </Component>
  );
};

export const Tabs = TabsRoot as TabsComponent;
Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;
