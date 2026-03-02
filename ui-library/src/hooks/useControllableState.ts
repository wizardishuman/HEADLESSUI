import * as React from "react";

type Params<T> = {
  value?: T;
  defaultValue: T;
  onChange?: (next: T) => void;
};

export const useControllableState = <T,>({ value, defaultValue, onChange }: Params<T>) => {
  const [internalValue, setInternalValue] = React.useState<T>(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const setValue = React.useCallback(
    (next: T) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  return [currentValue, setValue] as const;
};
