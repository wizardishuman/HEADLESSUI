import * as React from "react";
import type { PolymorphicComponentProps } from "../../types/polymorphic";

export type CardState = {
  interactive: boolean;
  focused: boolean;
  active: boolean;
  disabled: boolean;
};

type CardOwnProps = {
  interactive?: boolean;
  focusable?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode | ((state: CardState) => React.ReactNode);
  onPress?: () => void;
};

export type CardRootProps<E extends React.ElementType = "section"> = PolymorphicComponentProps<E, CardOwnProps>;

export type CardSlotProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<
  E,
  { className?: string; children?: React.ReactNode }
>;

export type CardComponent = {
  <E extends React.ElementType = "section">(props: CardRootProps<E>): React.ReactElement | null;
  Header: <E extends React.ElementType = "header">(props: CardSlotProps<E>) => React.ReactElement | null;
  Body: <E extends React.ElementType = "div">(props: CardSlotProps<E>) => React.ReactElement | null;
  Footer: <E extends React.ElementType = "footer">(props: CardSlotProps<E>) => React.ReactElement | null;
};
