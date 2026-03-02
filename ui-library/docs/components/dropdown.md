---
title: Dropdown
description: Displays a headless menu with trigger, menu, and item slots.
base: radix
component: true
---

<ComponentPreview
  name="dropdown-demo"
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
  name="dropdown"
  title="src/components/Dropdown/Dropdown.tsx"
  styleName="radix-nova"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Dropdown } from "@headless-food/ui-library"
```

```tsx showLineNumbers
<Dropdown className={theme.dropdown.root}>
  <Dropdown.Trigger className={theme.dropdown.trigger}>Sort</Dropdown.Trigger>
  <Dropdown.Menu className={theme.dropdown.menu}>
    <Dropdown.Item className={theme.dropdown.item} onSelect={() => setSort("rating")}>
      Top Rated
    </Dropdown.Item>
    <Dropdown.Item className={theme.dropdown.item}>Fastest ETA</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

## Examples

### Controlled Open State

Use `open` + `onOpenChange` when menu visibility is app-controlled.

<ComponentPreview
  styleName="radix-nova"
  name="dropdown-controlled"
  previewClassName="h-80"
/>

### Disabled Item

Set `disabled` on `Dropdown.Item` to keep item visible but non-selectable.

<ComponentPreview
  styleName="radix-nova"
  name="dropdown-disabled-item"
  previewClassName="h-80"
/>

## RTL

To enable RTL support in your app, see the [RTL configuration guide](/docs/rtl).

<ComponentPreview
  styleName="radix-nova"
  name="dropdown-rtl"
  direction="rtl"
  previewClassName="h-72"
/>

## API Reference

### Dropdown

The `Dropdown` component is the root container for menu state.

| Prop           | Type                      | Default |
| -------------- | ------------------------- | ------- |
| `as`           | `React.ElementType`       | `"div"` |
| `open`         | `boolean`                 | -       |
| `defaultOpen`  | `boolean`                 | `false` |
| `onOpenChange` | `(open: boolean) => void` | -       |
| `className`    | `string`                  | -       |

### Dropdown.Trigger

The `Dropdown.Trigger` opens and closes the menu.

| Prop        | Type                                                 | Default    |
| ----------- | ---------------------------------------------------- | ---------- |
| `as`        | `React.ElementType`                                  | `"button"` |
| `className` | `string`                                             | -          |
| `children`  | `ReactNode \| (state: { open: boolean }) => ReactNode` | -       |

### Dropdown.Menu

The `Dropdown.Menu` renders the menu list.

| Prop        | Type                | Default |
| ----------- | ------------------- | ------- |
| `as`        | `React.ElementType` | `"div"` |
| `className` | `string`            | -       |

### Dropdown.Item

The `Dropdown.Item` is a selectable menu item.

| Prop        | Type                                                                | Default    |
| ----------- | ------------------------------------------------------------------- | ---------- |
| `as`        | `React.ElementType`                                                 | `"button"` |
| `className` | `string`                                                            | -          |
| `disabled`  | `boolean`                                                           | `false`    |
| `onSelect`  | `() => void`                                                        | -          |
| `children`  | `ReactNode \| (state: { active: boolean; disabled: boolean }) => ReactNode` | - |

### Data Attributes

| Attribute       | Description |
| --------------- | ----------- |
| `data-open`     | Present while dropdown menu is open. |
| `data-active`   | Present on active item and root when open. |
| `data-disabled` | Present on disabled items. |

