export const buttonSnippet = `import { Button } from "@headless-food/ui-library";

<Button className={theme.button.primary} loading={isSaving}>
  {(state) => (state.loading ? "Saving..." : "Save Changes")}
</Button>`;

export const cardSnippet = `import { Card } from "@headless-food/ui-library";

<Card className={theme.card.root} interactive onPress={openDetails}>
  <Card.Header className={theme.card.header}>Restaurant Name</Card.Header>
  <Card.Body className={theme.card.body}>ETA 30-40 min</Card.Body>
  <Card.Footer className={theme.card.footer}>Open now</Card.Footer>
</Card>`;

export const inputSnippet = `import { Input } from "@headless-food/ui-library";

<Input
  label="Email"
  className={theme.input.root}
  inputClassName={theme.input.field}
  invalid={hasError}
  errorMessage={hasError ? "Please enter a valid email" : undefined}
/>`;

export const modalSnippet = `import { Button, Modal } from "@headless-food/ui-library";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal
  open={open}
  onOpenChange={setOpen}
  title="Confirm Action"
  overlayClassName={theme.modal.overlay}
  contentClassName={theme.modal.content}
>
  <p>Are you sure?</p>
</Modal>`;

export const dropdownSnippet = `import { Dropdown } from "@headless-food/ui-library";

<Dropdown>
  <Dropdown.Trigger className={theme.dropdown.trigger}>Sort</Dropdown.Trigger>
  <Dropdown.Menu className={theme.dropdown.menu}>
    <Dropdown.Item onSelect={() => setSort("rating")}>Top Rated</Dropdown.Item>
    <Dropdown.Item onSelect={() => setSort("eta")}>Fastest ETA</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`;

export const tabsSnippet = `import { Tabs } from "@headless-food/ui-library";

<Tabs defaultValue="overview">
  <Tabs.List aria-label="Sections" className={theme.tabs.list}>
    <Tabs.Trigger value="overview" className={theme.tabs.trigger}>Overview</Tabs.Trigger>
    <Tabs.Trigger value="details" className={theme.tabs.trigger}>Details</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="overview" className={theme.tabs.content}>Overview content</Tabs.Content>
  <Tabs.Content value="details" className={theme.tabs.content}>Details content</Tabs.Content>
</Tabs>`;

export const toastSnippet = `import { Button, Toast } from "@headless-food/ui-library";

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Show Toast</Button>
<Toast
  open={open}
  onOpenChange={setOpen}
  className={theme.toast.container}
  closeButtonClassName={theme.toast.close}
>
  Saved successfully.
</Toast>`;
