import * as React from "react";
import type { PolymorphicComponentProps } from "../../types/polymorphic";

export type ModalState = {
  open: boolean;
};

type ModalOwnProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: React.ReactNode;
  children: React.ReactNode | ((state: ModalState) => React.ReactNode);
  closeOnOverlayClick?: boolean;
  overlayClassName?: string;
  contentClassName?: string;
  closeButtonClassName?: string;
  closeLabel?: string;
};

export type ModalProps<E extends React.ElementType = "div"> = PolymorphicComponentProps<E, ModalOwnProps>;
