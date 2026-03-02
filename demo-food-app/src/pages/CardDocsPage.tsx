import { Card } from "@headless-food/ui-library";
import { DocPage } from "../components/docs/DocPage";
import { useDemoTheme } from "../app/theme/ThemeProvider";
import { ComponentPlayground } from "../components/docs/ComponentPlayground";

type CardVariant = "default" | "interactive";
type CardSize = "sm" | "md" | "lg";

export const CardDocsPage = () => {
  const { themeName } = useDemoTheme();
  return (
    <DocPage
      title="Card Docs"
      description="Composable card container with header, body, and footer slots."
      playground={
        <ComponentPlayground<CardVariant, CardSize>
          variants={[
            { label: "Default", value: "default" },
            { label: "Interactive", value: "interactive" }
          ]}
          sizes={[
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" }
          ]}
          initialTheme={themeName}
          renderPreview={({ theme, variant, size }) => (
            <Card className={`${theme.card.root} docs-card-${size}`} interactive={variant === "interactive"}>
              <Card.Header className={theme.card.header}>Card Header</Card.Header>
              <Card.Body className={theme.card.body}>Card body content for docs preview.</Card.Body>
              <Card.Footer className={theme.card.footer}>Footer metadata</Card.Footer>
            </Card>
          )}
          generateCode={({ variant, size, themeName }) => `import { Card } from "@headless-food/ui-library";

// selected theme: ${themeName}
<Card className={\`theme.card.root docs-card-${size}\`} interactive={${variant === "interactive"}}>
  <Card.Header className={theme.card.header}>Card Header</Card.Header>
  <Card.Body className={theme.card.body}>Card body content.</Card.Body>
  <Card.Footer className={theme.card.footer}>Footer metadata</Card.Footer>
</Card>`}
        />
      }
    />
  );
};
