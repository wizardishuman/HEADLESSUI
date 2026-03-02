---
title: Card
description: Displays structured content using composable header, body, and footer slots.
base: radix
component: true
---

<ComponentPreview
  name="card-demo"
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
  name="card"
  title="src/components/Card/Card.tsx"
  styleName="radix-nova"
/>

<Step>Update the import paths to match your project setup.</Step>

</Steps>

</TabsContent>

</CodeTabs>

## Usage

```tsx showLineNumbers
import { Card } from "@headless-food/ui-library"
```

```tsx showLineNumbers
<Card className={theme.card.root} interactive onPress={openDetails}>
  <Card.Header className={theme.card.header}>Card Title</Card.Header>
  <Card.Body className={theme.card.body}>Card content</Card.Body>
  <Card.Footer className={theme.card.footer}>Card footer</Card.Footer>
</Card>
```

## Examples

### Interactive Card

Use `interactive` to enable keyboard + pointer activation behavior.

<ComponentPreview
  styleName="radix-nova"
  name="card-interactive"
  previewClassName="h-96"
/>

### Custom Root Element

Use `as="article"` when card content maps to article semantics.

<ComponentPreview
  styleName="radix-nova"
  name="card-article"
  previewClassName="h-[26rem]"
/>

## RTL

To enable RTL support in your app, see the [RTL configuration guide](/docs/rtl).

<ComponentPreview
  styleName="radix-nova"
  name="card-rtl"
  direction="rtl"
  previewClassName="h-[30rem]"
/>

## API Reference

### Card

The `Card` component is the root container for card content.

| Prop         | Type                                                                   | Default     |
| ------------ | ---------------------------------------------------------------------- | ----------- |
| `as`         | `React.ElementType`                                                    | `"section"` |
| `interactive`| `boolean`                                                              | `false`     |
| `focusable`  | `boolean`                                                              | `interactive` |
| `disabled`   | `boolean`                                                              | `false`     |
| `className`  | `string`                                                               | -           |
| `onPress`    | `() => void`                                                           | -           |
| `children`   | `ReactNode \| (state: { interactive; focused; active; disabled }) => ReactNode` | -           |

### Card.Header

The `Card.Header` slot is used for heading content.

| Prop        | Type                | Default    |
| ----------- | ------------------- | ---------- |
| `as`        | `React.ElementType` | `"header"` |
| `className` | `string`            | -          |

### Card.Body

The `Card.Body` slot is used for main content.

| Prop        | Type                | Default |
| ----------- | ------------------- | ------- |
| `as`        | `React.ElementType` | `"div"` |
| `className` | `string`            | -       |

### Card.Footer

The `Card.Footer` slot is used for actions and metadata.

| Prop        | Type                | Default    |
| ----------- | ------------------- | ---------- |
| `as`        | `React.ElementType` | `"footer"` |
| `className` | `string`            | -          |

### Data Attributes

| Attribute        | Description |
| ---------------- | ----------- |
| `data-active`    | Present while interactive activation is triggered. |
| `data-disabled`  | Present when card is disabled. |

