import * as React from "react";

export type InputState = {
  disabled: boolean;
  invalid: boolean;
  focused: boolean;
};

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "children"> & {
  label?: React.ReactNode;
  description?: React.ReactNode;
  errorMessage?: React.ReactNode;
  invalid?: boolean;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  messageClassName?: string;
  onValueChange?: (value: string) => void;
  render?: (params: {
    state: InputState;
    inputProps: React.InputHTMLAttributes<HTMLInputElement>;
    labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  }) => React.ReactNode;
};
