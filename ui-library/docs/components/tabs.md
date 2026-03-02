---
title: Tabs
description: Organizes content into keyboard-navigable tab panels.
base: radix
component: true
---

<ComponentPreview
  name="tabs-demo"
  styleName="radix-nova"
  previewClassName="h-[28rem]"
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
  name="tabs"
  title="src/components/Tabs/Tabs.tsx"
  styleName="radix-nova"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Tabs } from "@headless-food/ui-library"
```

```tsx showLineNumbers
<Tabs defaultValue="menu">
  <Tabs.List className={theme.tabs.list} aria-label="Restaurant sections">
    <Tabs.Trigger value="menu" className={theme.tabs.trigger}>Menu</Tabs.Trigger>
    <Tabs.Trigger value="reviews" className={theme.tabs.trigger}>Reviews</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="menu" className={theme.tabs.content}>
    Menu content
  </Tabs.Content>
  <Tabs.Content value="reviews" className={theme.tabs.content}>
    Reviews content
  </Tabs.Content>
</Tabs>
```

## Examples

### Controlled Tabs

Use `value` and `onValueChange` for external tab-state control.

<ComponentPreview
  styleName="radix-nova"
  name="tabs-controlled"
  previewClassName="h-80"
/>

### Force Mounted Panel

Set `forceMount` on `Tabs.Content` to keep hidden panels mounted.

<ComponentPreview
  styleName="radix-nova"
  name="tabs-force-mount"
  previewClassName="h-80"
/>

## RTL

To enable RTL support in your app, see the [RTL configuration guide](/docs/rtl).

<ComponentPreview
  styleName="radix-nova"
  name="tabs-rtl"
  direction="rtl"
  previewClassName="h-72"
/>

## API Reference

### Tabs

The `Tabs` root manages selected value state.

| Prop            | Type                       | Default |
| --------------- | -------------------------- | ------- |
| `as`            | `React.ElementType`        | `"div"` |
| `value`         | `string`                   | -       |
| `defaultValue`  | `string`                   | `""`    |
| `onValueChange` | `(value: string) => void`  | -       |
| `className`     | `string`                   | -       |

### Tabs.List

The `Tabs.List` wraps tab triggers.

| Prop          | Type                | Default |
| ------------- | ------------------- | ------- |
| `as`          | `React.ElementType` | `"div"` |
| `className`   | `string`            | -       |
| `aria-label`  | `string`            | -       |

### Tabs.Trigger

The `Tabs.Trigger` changes selected tab value.

| Prop        | Type                                                                | Default    |
| ----------- | ------------------------------------------------------------------- | ---------- |
| `as`        | `React.ElementType`                                                 | `"button"` |
| `value`     | `string`                                                            | -          |
| `className` | `string`                                                            | -          |
| `disabled`  | `boolean`                                                           | `false`    |
| `children`  | `ReactNode \| (state: { active: boolean; disabled: boolean }) => ReactNode` | - |

### Tabs.Content

The `Tabs.Content` renders the panel for a trigger value.

| Prop         | Type                | Default |
| ------------ | ------------------- | ------- |
| `as`         | `React.ElementType` | `"div"` |
| `value`      | `string`            | -       |
| `className`  | `string`            | -       |
| `forceMount` | `boolean`           | `false` |

### Data Attributes

| Attribute       | Description |
| --------------- | ----------- |
| `data-active`   | Present on active trigger and panel. |
| `data-disabled` | Present on disabled triggers. |

