import { Button, Toast } from "@headless-food/ui-library";
import * as React from "react";
import { useDemoTheme } from "../app/theme/ThemeProvider";
import { DocPage } from "../components/docs/DocPage";
import { toastSnippet } from "../snippets/componentSnippets";

export const ToastDocsPage = () => {
  const { theme } = useDemoTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <DocPage
      title="Toast Docs"
      description="Toast component for non-blocking status updates with optional auto-dismiss."
      preview={
        <>
          <Button className={theme.button.primary} onClick={() => setOpen(true)}>
            Show Toast
          </Button>
          <Toast
            open={open}
            onOpenChange={setOpen}
            className={theme.toast.container}
            closeButtonClassName={theme.toast.close}
          >
            Settings saved.
          </Toast>
        </>
      }
      code={toastSnippet}
    />
  );
};
