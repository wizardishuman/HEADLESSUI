import * as React from "react";

export type AsProp<E extends React.ElementType> = {
  as?: E;
};

export type PropsToOmit<E extends React.ElementType, P> = keyof (AsProp<E> & P);

export type PolymorphicComponentProps<E extends React.ElementType, P> = P &
  AsProp<E> &
  Omit<React.ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>;
