import { Button } from "@headless-food/ui-library";
import { DocPage } from "../components/docs/DocPage";
import { useDemoTheme } from "../app/theme/ThemeProvider";
import { ComponentPlayground } from "../components/docs/ComponentPlayground";
import type { DemoThemeContract } from "../app/theme/themeTokens";

type ButtonVariant = keyof DemoThemeContract["button"];
type ButtonSize = "sm" | "md" | "lg";

export const ButtonDocsPage = () => {
  const { themeName } = useDemoTheme();

  const variants = [
    { label: "Primary", value: "primary" },
    { label: "Secondary", value: "secondary" },
    { label: "Ghost", value: "ghost" }
  ] as const;

  const sizes = [
    { label: "Small", value: "sm" },
    { label: "Medium", value: "md" },
    { label: "Large", value: "lg" }
  ] as const;

  return (
    <DocPage
      title="Button Docs"
      description="Headless button supports loading, disabled, custom element rendering, and keyboard support."
      playground={
        <ComponentPlayground<ButtonVariant, ButtonSize>
          variants={variants}
          sizes={sizes}
          initialTheme={themeName}
          showLoadingToggle
          showDisabledToggle
          renderPreview={({ theme, variant, size, loading, disabled }) => (
            <div className="playground-center">
              <Button className={`${theme.button[variant]} docs-btn-${size}`} loading={loading} disabled={disabled}>
                Order Now
              </Button>
            </div>
          )}
          generateCode={({ variant, size, themeName, loading, disabled }) => {
            const loadingProp = loading ? " loading" : "";
            const disabledProp = disabled ? " disabled" : "";
            return `import { Button } from "@headless-food/ui-library";

// selected theme: ${themeName}
<Button className={\`theme.button.${variant} docs-btn-${size}\`}${loadingProp}${disabledProp}>
  Order Now
</Button>`;
          }}
        />
      }
    />
  );
};
