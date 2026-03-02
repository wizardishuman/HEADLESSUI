---
title: Toast
description: Displays temporary status messages using an accessible live region.
base: radix
component: true
---

<ComponentPreview
  name="toast-demo"
  styleName="radix-nova"
  previewClassName="h-[24rem]"
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
  name="toast"
  title="src/components/Toast/Toast.tsx"
  styleName="radix-nova"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Toast } from "@headless-food/ui-library"
```

```tsx showLineNumbers
<Toast
  open={toastOpen}
  onOpenChange={setToastOpen}
  className={theme.toast.container}
  closeButtonClassName={theme.toast.close}
>
  Order placed successfully.
</Toast>
```

## Examples

### Auto Dismiss

Set `duration` to auto-close the toast after a fixed timeout.

<ComponentPreview
  styleName="radix-nova"
  name="toast-duration"
  previewClassName="h-64"
/>

### Persistent Toast

Pass `duration={0}` to disable automatic dismissal.

<ComponentPreview
  styleName="radix-nova"
  name="toast-persistent"
  previewClassName="h-64"
/>

## RTL

To enable RTL support in your app, see the [RTL configuration guide](/docs/rtl).

<ComponentPreview
  styleName="radix-nova"
  name="toast-rtl"
  direction="rtl"
  previewClassName="h-64"
/>

## API Reference

### Toast

The `Toast` component renders a polite status message.

| Prop                 | Type                                            | Default                    |
| -------------------- | ----------------------------------------------- | -------------------------- |
| `as`                 | `React.ElementType`                             | `"div"`                    |
| `open`               | `boolean`                                       | -                          |
| `onOpenChange`       | `(open: boolean) => void`                       | -                          |
| `duration`           | `number`                                        | `3000`                     |
| `className`          | `string`                                        | -                          |
| `closeButtonClassName` | `string`                                      | -                          |
| `closeLabel`         | `string`                                        | `"Dismiss notification"`   |
| `children`           | `ReactNode \| (state: { open: boolean }) => ReactNode` | -                    |

### Data Attributes

| Attribute      | Description |
| -------------- | ----------- |
| `data-open`    | Present while toast is visible. |

