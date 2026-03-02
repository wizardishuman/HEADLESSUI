import * as React from "react";
import type { PolymorphicComponentProps } from "../../types/polymorphic";

type TabsRootOwnProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  children: React.ReactNode;
};

type TabsListOwnProps = {
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
};

type TabsTriggerOwnProps = {
  value: string;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode | ((state: { active: boolean; disabled: boolean }) => React.ReactNode);
};

type TabsContentOwnProps = {
  value: string;
  className?: string;
  forceMount?: boolean;
  children: React.ReactNode;
};

export type TabsRootProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<E, TabsRootOwnProps>;
export type TabsListProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<E, TabsListOwnProps>;
export type TabsTriggerProps<E extends React.ElementType = "button"> = PolymorphicComponentProps<E, TabsTriggerOwnProps>;
export type TabsContentProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<E, TabsContentOwnProps>;

export type TabsComponent = {
  <E extends React.ElementType = "div">(props: TabsRootProps<E>): React.ReactElement | null;
  List: <E extends React.ElementType = "div">(props: TabsListProps<E>) => React.ReactElement | null;
  Trigger: <E extends React.ElementType = "button">(props: TabsTriggerProps<E>) => React.ReactElement | null;
  Content: <E extends React.ElementType = "div">(props: TabsContentProps<E>) => React.ReactElement | null;
};
