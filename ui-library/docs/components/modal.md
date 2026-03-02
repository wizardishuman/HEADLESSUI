---
title: Modal
description: Displays a controlled dialog with focus management and keyboard escape handling.
base: radix
component: true
---

<ComponentPreview
  name="modal-demo"
  styleName="radix-nova"
  previewClassName="h-[30rem]"
/>

## Installation

<CodeTabs>

<TabsList>
  <TabsTrigger value="cli">Command</TabsTrigger>
  <TabsTrigger value="manual">Manual</TabsTrigger>
</TabsList>
<TabsContent value="cli">

```bash
npm install @headless-food/ui-library
```

</TabsContent>

<TabsContent value="manual">

<Steps className="mb-0 pt-2">

<Step>Copy and paste the following code into your project.</Step>

<ComponentSource
  name="modal"
  title="src/components/Modal/Modal.tsx"
  styleName="radix-nova"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Modal } from "@headless-food/ui-library"
```

```tsx showLineNumbers
<Modal
  open={open}
  onOpenChange={setOpen}
  title="Confirm order"
  overlayClassName={theme.modal.overlay}
  contentClassName={theme.modal.content}
  closeButtonClassName={theme.modal.close}
>
  <p>Do you want to place this order?</p>
</Modal>
```

## Examples

### Non-dismissible Overlay

Set `closeOnOverlayClick={false}` to keep the dialog open until explicit action.

<ComponentPreview
  styleName="radix-nova"
  name="modal-overlay-lock"
  previewClassName="h-[28rem]"
/>

### Render Function Content

Use children as a function to access modal open state.

<ComponentPreview
  styleName="radix-nova"
  name="modal-render"
  previewClassName="h-[28rem]"
/>

## RTL

To enable RTL support in your app, see the [RTL configuration guide](/docs/rtl).

<ComponentPreview
  styleName="radix-nova"
  name="modal-rtl"
  direction="rtl"
  previewClassName="h-[28rem]"
/>

## API Reference

### Modal

The `Modal` component renders a controlled dialog in a portal.

| Prop                 | Type                                  | Default |
| -------------------- | ------------------------------------- | ------- |
| `as`                 | `React.ElementType`                   | `"div"` |
| `open`               | `boolean`                             | -       |
| `onOpenChange`       | `(open: boolean) => void`             | -       |
| `title`              | `ReactNode`                           | -       |
| `children`           | `ReactNode \| (state: { open: boolean }) => ReactNode` | - |
| `closeOnOverlayClick`| `boolean`                             | `true`  |
| `overlayClassName`   | `string`                              | -       |
| `contentClassName`   | `string`                              | -       |
| `closeButtonClassName` | `string`                            | -       |
| `closeLabel`         | `string`                              | `"Close dialog"` |

### Data Attributes

| Attribute      | Description |
| -------------- | ----------- |
| `data-open`    | Present on overlay/content while modal is open. |

