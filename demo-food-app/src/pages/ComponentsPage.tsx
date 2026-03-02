import { Button, Card, Dropdown, Input, Modal, Tabs, Toast } from "@headless-food/ui-library";
import * as React from "react";
import { useDemoTheme } from "../app/theme/ThemeProvider";

export const ComponentsPage = () => {
  const { theme } = useDemoTheme();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [toastOpen, setToastOpen] = React.useState(false);

  return (
    <section className={theme.app.panel}>
      <h2>Components Showcase</h2>
      <div className="grid">
        <Card className={theme.card.root}>
          <Card.Header className={theme.card.header}>Button</Card.Header>
          <Card.Body className={theme.card.body}>
            <Button className={theme.button.primary}>Primary</Button>
            <Button className={theme.button.secondary}>Secondary</Button>
          </Card.Body>
        </Card>

        <Card className={theme.card.root}>
          <Card.Header className={theme.card.header}>Input</Card.Header>
          <Card.Body className={theme.card.body}>
            <Input
              label="Search dish"
              className={theme.input.root}
              labelClassName={theme.input.label}
              inputClassName={theme.input.field}
              messageClassName={theme.input.message}
            />
          </Card.Body>
        </Card>

        <Card className={theme.card.root}>
          <Card.Header className={theme.card.header}>Dropdown</Card.Header>
          <Card.Body className={theme.card.body}>
            <Dropdown className={theme.dropdown.root}>
              <Dropdown.Trigger className={theme.dropdown.trigger}>Open Menu</Dropdown.Trigger>
              <Dropdown.Menu className={theme.dropdown.menu}>
                <Dropdown.Item className={theme.dropdown.item}>Most Popular</Dropdown.Item>
                <Dropdown.Item className={theme.dropdown.item}>Budget First</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Body>
        </Card>

        <Card className={theme.card.root}>
          <Card.Header className={theme.card.header}>Tabs</Card.Header>
          <Card.Body className={theme.card.body}>
            <Tabs defaultValue="one">
              <Tabs.List className={theme.tabs.list} aria-label="Showcase tabs">
                <Tabs.Trigger value="one" className={theme.tabs.trigger}>
                  One
                </Tabs.Trigger>
                <Tabs.Trigger value="two" className={theme.tabs.trigger}>
                  Two
                </Tabs.Trigger>
              </Tabs.List>
              <Tabs.Content value="one" className={theme.tabs.content}>
                First panel.
              </Tabs.Content>
              <Tabs.Content value="two" className={theme.tabs.content}>
                Second panel.
              </Tabs.Content>
            </Tabs>
          </Card.Body>
        </Card>
      </div>

      <div className="stack">
        <Button className={theme.button.primary} onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>
        <Button className={theme.button.secondary} onClick={() => setToastOpen(true)}>
          Show Toast
        </Button>
      </div>

      <Modal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Showcase Modal"
        overlayClassName={theme.modal.overlay}
        contentClassName={theme.modal.content}
        closeButtonClassName={theme.modal.close}
      >
        <p>All modal visuals are themed from demo app only.</p>
      </Modal>

      <Toast
        open={toastOpen}
        onOpenChange={setToastOpen}
        className={theme.toast.container}
        closeButtonClassName={theme.toast.close}
      >
        Components showcase toast.
      </Toast>
    </section>
  );
};
