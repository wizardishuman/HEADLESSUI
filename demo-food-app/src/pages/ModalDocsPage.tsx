import { Button, Modal } from "@headless-food/ui-library";
import * as React from "react";
import { useDemoTheme } from "../app/theme/ThemeProvider";
import { ComponentPlayground } from "../components/docs/ComponentPlayground";
import { DocPage } from "../components/docs/DocPage";

type ModalVariant = "dismissible" | "strict";
type ModalSize = "sm" | "md" | "lg";

const ModalPreview = ({
  contentClassName,
  overlayClassName,
  closeButtonClassName,
  variant
}: {
  contentClassName: string;
  overlayClassName: string;
  closeButtonClassName: string;
  variant: ModalVariant;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="playground-center">
      <Button className={closeButtonClassName} onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        open={open}
        onOpenChange={setOpen}
        title="Modal Example"
        overlayClassName={overlayClassName}
        contentClassName={contentClassName}
        closeButtonClassName={closeButtonClassName}
        closeOnOverlayClick={variant === "dismissible"}
      >
        <p>Close with escape or button.</p>
      </Modal>
    </div>
  );
};

export const ModalDocsPage = () => {
  const { themeName } = useDemoTheme();

  return (
    <DocPage
      title="Modal Docs"
      description="Accessible dialog primitive with controlled open state, escape handling, and overlay dismissal."
      playground={
        <ComponentPlayground<ModalVariant, ModalSize>
          variants={[
            { label: "Dismissible", value: "dismissible" },
            { label: "Strict Overlay", value: "strict" }
          ]}
          sizes={[
            { label: "Small", value: "sm" },
            { label: "Medium", value: "md" },
            { label: "Large", value: "lg" }
          ]}
          initialTheme={themeName}
          renderPreview={({ theme, size, variant }) => (
            <ModalPreview
              variant={variant}
              overlayClassName={theme.modal.overlay}
              closeButtonClassName={theme.modal.close}
              contentClassName={`${theme.modal.content} docs-modal-${size}`}
            />
          )}
          generateCode={({ themeName, size, variant }) => `import { Button, Modal } from "@headless-food/ui-library";

// selected theme: ${themeName}
const [open, setOpen] = useState(false);

<Button className={theme.modal.close} onClick={() => setOpen(true)}>Open Modal</Button>
<Modal
  open={open}
  onOpenChange={setOpen}
  title="Modal Example"
  overlayClassName={theme.modal.overlay}
  contentClassName={\`theme.modal.content docs-modal-${size}\`}
  closeButtonClassName={theme.modal.close}
  closeOnOverlayClick={${variant === "dismissible"}}
>
  <p>Close with escape or button.</p>
</Modal>`}
        />
      }
    />
  );
};
