# @headless-food/ui-library

Headless React component library focused on behavior, accessibility, and composition.  
This package intentionally contains no visual design tokens, colors, spacing, or brand styles.

## Installation

```bash
npm install @headless-food/ui-library
```

Peer dependencies:
- `react`
- `react-dom`

## Usage

```tsx
import { Button, Card } from "@headless-food/ui-library";

export function Example() {
  return (
    <Card className="card">
      <Card.Header>Restaurant</Card.Header>
      <Card.Body>
        <Button className="btn">Order now</Button>
      </Card.Body>
    </Card>
  );
}
```

## Architecture

- `src/components/*`: component primitives (modular + tree-shakable).
- `src/types/polymorphic.ts`: shared polymorphic typing contract.
- `src/hooks/*`: reusable controlled-state/outside-click hooks.
- `docs/components/*`: per-component API docs.

## Styling Contract

The library exposes only structural and state hooks:
- `className` props on all root/slot elements.
- state attributes like `data-open`, `data-active`, `data-loading`, `data-disabled`, `data-invalid`.

Consumer applications provide styling through:
- CSS variables
- utility classes
- token maps
- theme providers

No library source changes are needed to add new themes.

## Adding Themes (Consumer Side)

1. Define theme tokens/classes in your app.
2. Map tokens to component `className` and slot `className` props.
3. Toggle token source via app-level state/provider.

## Adding Components (Library Side)

1. Create `src/components/NewComponent`.
2. Include:
   - `NewComponent.tsx`
   - `NewComponent.types.ts`
   - `index.ts`
3. Add tests in `tests/NewComponent.test.tsx`.
4. Export from `src/index.ts`.
5. Add docs under `docs/components/new-component.md`.

## Versioning Strategy

Semantic Versioning:
- `MAJOR`: breaking API changes.
- `MINOR`: new backward-compatible capabilities.
- `PATCH`: bug fixes and accessibility improvements.

### Breaking vs Non-Breaking

Breaking:
- removing or renaming public props.
- changing compound slot behavior.
- changing controlled/uncontrolled contracts.

Non-breaking:
- adding optional props.
- improving ARIA coverage without changing API.
- adding new components.

### Migration Example

If `Button` prop `loadingText` is removed in `2.0.0`:
1. Replace with render prop usage.
2. Update all direct references.
3. Run behavior tests against affected flows.

## Upgrade Process

1. Read release notes/changelog.
2. Update dependency version.
3. Run `npm run test` in your consumer app.
4. Validate accessibility-critical interactions (keyboard + screen reader output).

## Avoiding Breaking Changes

- Keep props additive when possible.
- Mark deprecated APIs before removal.
- Add migration guidance in changelog for each major release.

## Local Reuse via npm link

From `ui-library`:

```bash
npm install
npm run build
npm link
```

From another app:

```bash
npm link @headless-food/ui-library
```

## Development

```bash
npm install
npm run build
npm run test
```
