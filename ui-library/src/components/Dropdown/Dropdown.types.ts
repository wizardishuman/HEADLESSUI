import * as React from "react";
import type { PolymorphicComponentProps } from "../../types/polymorphic";

export type DropdownState = {
  open: boolean;
};

type DropdownRootOwnProps = {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children: React.ReactNode;
};

type DropdownTriggerOwnProps = {
  className?: string;
  children: React.ReactNode | ((state: DropdownState) => React.ReactNode);
};

type DropdownMenuOwnProps = {
  className?: string;
  children: React.ReactNode;
};

type DropdownItemOwnProps = {
  className?: string;
  disabled?: boolean;
  onSelect?: () => void;
  children: React.ReactNode | ((state: { active: boolean; disabled: boolean }) => React.ReactNode);
};

export type DropdownRootProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<E, DropdownRootOwnProps>;
export type DropdownTriggerProps<E extends React.ElementType = "button"> = PolymorphicComponentProps<E, DropdownTriggerOwnProps>;
export type DropdownMenuProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<E, DropdownMenuOwnProps>;
export type DropdownItemProps<E extends React.ElementType = "button"> = PolymorphicComponentProps<E, DropdownItemOwnProps>;

export type DropdownComponent = {
  <E extends React.ElementType = "div">(props: DropdownRootProps<E>): React.ReactElement | null;
  Trigger: <E extends React.ElementType = "button">(props: DropdownTriggerProps<E>) => React.ReactElement | null;
  Menu: <E extends React.ElementType = "div">(props: DropdownMenuProps<E>) => React.ReactElement | null;
  Item: <E extends React.ElementType = "button">(props: DropdownItemProps<E>) => React.ReactElement | null;
};
