import * as React from "react";
import type { PolymorphicComponentProps } from "../../types/polymorphic";

export type ToastState = {
  open: boolean;
};

type ToastOwnProps = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
  className?: string;
  closeButtonClassName?: string;
  closeLabel?: string;
  children: React.ReactNode | ((state: ToastState) => React.ReactNode);
};

export type ToastProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<E, ToastOwnProps>;
