import { Input } from "@headless-food/ui-library";
import { DocPage } from "../components/docs/DocPage";
import { useDemoTheme } from "../app/theme/ThemeProvider";
import { ComponentPlayground } from "../components/docs/ComponentPlayground";

type InputVariant = "default" | "invalid";
type InputSize = "sm" | "md" | "lg";

export const InputDocsPage = () => {
  const { themeName } = useDemoTheme();
  return (
    <DocPage
      title="Input Docs"
      description="Accessible input with validation state and controlled callbacks."
      playground={
        <ComponentPlayground<InputVariant, InputSize>
          variants={[
            { label: "Default", value: "default" },
            { label: "Invalid", value: "invalid" }
          ]}
          sizes={[
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" }
          ]}
          initialTheme={themeName}
          renderPreview={({ theme, variant, size }) => (
            <Input
              label="Email"
              placeholder="you@example.com"
              invalid={variant === "invalid"}
              errorMessage={variant === "invalid" ? "Please enter a valid email." : undefined}
              className={theme.input.root}
              labelClassName={theme.input.label}
              inputClassName={`${theme.input.field} docs-input-${size}`}
              messageClassName={theme.input.message}
            />
          )}
          generateCode={({ variant, size, themeName }) => `import { Input } from "@headless-food/ui-library";

// selected theme: ${themeName}
<Input
  label="Email"
  placeholder="you@example.com"
  invalid={${variant === "invalid"}}
  errorMessage={${variant === "invalid" ? '"Please enter a valid email."' : "undefined"}}
  className={theme.input.root}
  labelClassName={theme.input.label}
  inputClassName={\`theme.input.field docs-input-${size}\`}
  messageClassName={theme.input.message}
/>`}
        />
      }
    />
  );
};
