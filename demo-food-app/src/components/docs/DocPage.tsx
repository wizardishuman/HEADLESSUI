import { Card } from "@headless-food/ui-library";
import * as React from "react";
import type { ReactNode } from "react";
import { useDemoTheme } from "../../app/theme/ThemeProvider";

type DocPageProps = {
  title: string;
  description: string;
  preview?: ReactNode;
  code?: string;
  playground?: ReactNode;
  installCommand?: string;
};

const CodeBlock = ({ code, title }: { code: string; title: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="doc-code-shell">
      <div className="doc-code-head">
        <strong>{title}</strong>
        <button type="button" className="doc-copy-btn" onClick={handleCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export const DocPage = ({
  title,
  description,
  preview,
  code,
  playground,
  installCommand = "npm install @headless-food/ui-library"
}: DocPageProps) => {
  const { theme } = useDemoTheme();
  return (
    <section className={`docs-page ${theme.app.panel}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Card className={theme.card.root}>
        <Card.Header className={theme.card.header}>Installation</Card.Header>
        <Card.Body className={theme.card.body}>
          <CodeBlock title="Command" code={installCommand} />
        </Card.Body>
      </Card>
      {playground ? (
        <Card className={theme.card.root}>
          <Card.Header className={theme.card.header}>Interactive Playground</Card.Header>
          <Card.Body className={theme.card.body}>{playground}</Card.Body>
        </Card>
      ) : (
        <>
          <Card className={theme.card.root}>
            <Card.Header className={theme.card.header}>Live Preview</Card.Header>
            <Card.Body className={theme.card.body}>{preview}</Card.Body>
          </Card>
          <Card className={theme.card.root}>
            <Card.Header className={theme.card.header}>Usage Snippet</Card.Header>
            <Card.Body className={theme.card.body}>{code ? <CodeBlock title={`${title} Snippet`} code={code} /> : null}</Card.Body>
          </Card>
        </>
      )}
    </section>
  );
};
