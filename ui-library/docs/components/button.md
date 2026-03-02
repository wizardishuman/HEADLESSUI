---
title: Button
description: Triggers an action with loading, disabled, and polymorphic rendering support.
base: radix
component: true
---

<ComponentPreview
  name="button-demo"
  styleName="radix-nova"
  previewClassName="h-[20rem]"
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
  name="button"
  title="src/components/Button/Button.tsx"
  styleName="radix-nova"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Button } from "@headless-food/ui-library"
```

```tsx showLineNumbers
<Button className={theme.button.primary} loading={isSubmitting}>
  {(state) => (state.loading ? "Submitting..." : "Submit")}
</Button>
```

## Examples

### Polymorphic Link Button

Render the button as a link using the `as` prop.

<ComponentPreview
  styleName="radix-nova"
  name="button-as-link"
  previewClassName="h-72"
/>

### Custom Render Function

Use `render` to control the full element output while reusing button state.

<ComponentPreview
  styleName="radix-nova"
  name="button-render"
  previewClassName="h-72"
/>

## RTL

To enable RTL support in your app, see the [RTL configuration guide](/docs/rtl).

<ComponentPreview
  styleName="radix-nova"
  name="button-rtl"
  direction="rtl"
  previewClassName="h-56"
/>

## API Reference

### Button

The `Button` component provides accessible action behavior and exposes interaction state.

| Prop         | Type                                                                  | Default    |
| ------------ | --------------------------------------------------------------------- | ---------- |
| `as`         | `React.ElementType`                                                   | `"button"` |
| `loading`    | `boolean`                                                             | `false`    |
| `disabled`   | `boolean`                                                             | `false`    |
| `className`  | `string`                                                              | -          |
| `aria-label` | `string`                                                              | -          |
| `children`   | `ReactNode \| (state: { loading: boolean; disabled: boolean }) => ReactNode` | -          |
| `render`     | `(params: { state; props }) => ReactNode`                            | -          |

### Data Attributes

| Attribute        | Description |
| ---------------- | ----------- |
| `data-loading`   | Present when loading is true. |
| `data-disabled`  | Present when disabled or loading is true. |

