---
title: Input
description: Captures user input with accessible labeling, descriptions, and error messaging.
base: radix
component: true
---

<ComponentPreview
  name="input-demo"
  styleName="radix-nova"
  previewClassName="h-[26rem]"
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
  name="input"
  title="src/components/Input/Input.tsx"
  styleName="radix-nova"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Input } from "@headless-food/ui-library"
```

```tsx showLineNumbers
<Input
  label="Email"
  placeholder="you@example.com"
  invalid={hasError}
  errorMessage={hasError ? "Please enter a valid email." : undefined}
  className={theme.input.root}
  labelClassName={theme.input.label}
  inputClassName={theme.input.field}
  messageClassName={theme.input.message}
/>
```

## Examples

### Controlled Value

Use `value` with `onValueChange` to run controlled validation logic.

<ComponentPreview
  styleName="radix-nova"
  name="input-controlled"
  previewClassName="h-80"
/>

### Custom Render

Use the `render` prop when you need custom markup around generated input props.

<ComponentPreview
  styleName="radix-nova"
  name="input-render"
  previewClassName="h-80"
/>

## RTL

To enable RTL support in your app, see the [RTL configuration guide](/docs/rtl).

<ComponentPreview
  styleName="radix-nova"
  name="input-rtl"
  direction="rtl"
  previewClassName="h-72"
/>

## API Reference

### Input

The `Input` component is an accessible text field with label and messaging support.

| Prop               | Type                               | Default |
| ------------------ | ---------------------------------- | ------- |
| `label`            | `ReactNode`                        | -       |
| `description`      | `ReactNode`                        | -       |
| `errorMessage`     | `ReactNode`                        | -       |
| `invalid`          | `boolean`                          | `false` |
| `disabled`         | `boolean`                          | `false` |
| `className`        | `string`                           | -       |
| `labelClassName`   | `string`                           | -       |
| `inputClassName`   | `string`                           | -       |
| `messageClassName` | `string`                           | -       |
| `onValueChange`    | `(value: string) => void`          | -       |
| `render`           | `(params: { state; inputProps; labelProps }) => ReactNode` | -       |

Also supports standard `input` element props.

### Data Attributes

| Attribute        | Description |
| ---------------- | ----------- |
| `data-invalid`   | Present when input is in invalid state. |
| `data-disabled`  | Present when input is disabled. |
| `data-active`    | Present when input is focused. |

