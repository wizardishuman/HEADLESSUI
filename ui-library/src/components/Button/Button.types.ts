import * as React from "react";
import type { PolymorphicComponentProps } from "../../types/polymorphic";

export type ButtonState = {
  loading: boolean;
  disabled: boolean;
};

type ButtonOwnProps = {
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
  children?: React.ReactNode | ((state: ButtonState) => React.ReactNode);
  render?: (params: { state: ButtonState; props: Record<string, unknown> }) => React.ReactNode;
};

export type ButtonProps<E extends React.ElementType = "button"> = PolymorphicComponentProps<E, ButtonOwnProps>;
