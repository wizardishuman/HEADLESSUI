import * as React from "react";
import { demoThemes } from "../../app/theme/themeTokens";
import type { DemoThemeContract, DemoThemeName } from "../../app/theme/themeTokens";

type Option<T extends string> = {
  label: string;
  value: T;
};

export type PlaygroundRenderState<V extends string, S extends string> = {
  variant: V;
  size: S;
  themeName: DemoThemeName;
  theme: DemoThemeContract;
  loading: boolean;
  disabled: boolean;
};

type ComponentPlaygroundProps<V extends string, S extends string> = {
  variants: readonly Option<V>[];
  sizes: readonly Option<S>[];
  themes?: readonly DemoThemeName[];
  initialVariant?: V;
  initialSize?: S;
  initialTheme?: DemoThemeName;
  showLoadingToggle?: boolean;
  showDisabledToggle?: boolean;
  renderPreview: (state: PlaygroundRenderState<V, S>) => React.ReactNode;
  generateCode: (state: PlaygroundRenderState<V, S>) => string;
};

export const ComponentPlayground = <V extends string, S extends string>({
  variants,
  sizes,
  themes = Object.keys(demoThemes) as DemoThemeName[],
  initialVariant,
  initialSize,
  initialTheme,
  showLoadingToggle = false,
  showDisabledToggle = false,
  renderPreview,
  generateCode
}: ComponentPlaygroundProps<V, S>) => {
  const [variant, setVariant] = React.useState<V>(initialVariant ?? variants[0].value);
  const [size, setSize] = React.useState<S>(initialSize ?? sizes[0].value);
  const [themeName, setThemeName] = React.useState<DemoThemeName>(initialTheme ?? themes[0]);
  const [loading, setLoading] = React.useState(false);
  const [disabled, setDisabled] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const theme = demoThemes[themeName];
  const renderState: PlaygroundRenderState<V, S> = {
    variant,
    size,
    themeName,
    theme,
    loading,
    disabled
  };
  const code = generateCode(renderState);

  const onCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="playground-shell">
      <div className="playground-controls">
        <label className="playground-field">
          <span>Variant</span>
          <select value={variant} onChange={(event) => setVariant(event.target.value as V)}>
            {variants.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="playground-field">
          <span>Size</span>
          <select value={size} onChange={(event) => setSize(event.target.value as S)}>
            {sizes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="playground-field">
          <span>Theme</span>
          <select value={themeName} onChange={(event) => setThemeName(event.target.value as DemoThemeName)}>
            {themes.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
      </div>

      {(showLoadingToggle || showDisabledToggle) && (
        <div className="playground-state-toggles">
          {showLoadingToggle && (
            <label>
              <input type="checkbox" checked={loading} onChange={(event) => setLoading(event.target.checked)} />
              Loading
            </label>
          )}
          {showDisabledToggle && (
            <label>
              <input type="checkbox" checked={disabled} onChange={(event) => setDisabled(event.target.checked)} />
              Disabled
            </label>
          )}
        </div>
      )}

      <div className={`playground-preview ${theme.app.panel}`}>{renderPreview(renderState)}</div>

      <div className="doc-code-shell">
        <div className="doc-code-head">
          <strong>Generated Usage</strong>
          <button type="button" className="doc-copy-btn" onClick={onCopy}>
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};
