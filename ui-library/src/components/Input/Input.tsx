import * as React from "react";
import { cn } from "../../utils/cn";
import type { InputProps, InputState } from "./Input.types";

export const Input = ({
  label,
  description,
  errorMessage,
  invalid = false,
  disabled = false,
  className,
  labelClassName,
  inputClassName,
  messageClassName,
  id,
  onChange,
  onFocus,
  onBlur,
  onValueChange,
  render,
  ...rest
}: InputProps) => {
  const fallbackId = React.useId();
  const inputId = id ?? fallbackId;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const errorId = errorMessage ? `${inputId}-error` : undefined;
  const [focused, setFocused] = React.useState(false);
  const state: InputState = { disabled, invalid, focused };

  const inputProps = {
    ...rest,
    id: inputId,
    disabled,
    "aria-invalid": invalid || undefined,
    "aria-describedby": [descriptionId, errorId].filter(Boolean).join(" ") || undefined,
    className: cn(inputClassName),
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(event);
      onValueChange?.(event.target.value);
    },
    onFocus: (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(true);
      onFocus?.(event);
    },
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => {
      setFocused(false);
      onBlur?.(event);
    },
    "data-disabled": disabled ? "true" : undefined,
    "data-invalid": invalid ? "true" : undefined,
    "data-active": focused ? "true" : undefined
  };

  const labelProps = {
    htmlFor: inputId,
    className: cn(labelClassName)
  };

  if (render) {
    return <>{render({ state, inputProps, labelProps })}</>;
  }

  return (
    <div className={cn(className)}>
      {label ? <label {...labelProps}>{label}</label> : null}
      <input {...inputProps} />
      {description ? (
        <p id={descriptionId} className={cn(messageClassName)}>
          {description}
        </p>
      ) : null}
      {errorMessage ? (
        <p id={errorId} className={cn(messageClassName)}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};
