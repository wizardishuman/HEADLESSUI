# Headless UI Library + Food Demo (Two-Project Setup)

This repository contains two separate projects:

- `ui-library/`: production-ready headless UI component library.
- `demo-food-app/`: consumer React app using React Router and runtime theme switching.

The library handles logic, structure, and accessibility only.  
Visual styling is defined entirely in the demo app.

## 1) Architecture

### Separation of concerns
- Library owns behavior contracts, accessibility, component composition, and typed APIs.
- Demo app owns all visual themes, brand language, layout, and style tokens.

### Headless contract
- No brand styles in library.
- Consumer app injects classes/tokens.
- Components expose internal state via `data-*` attributes:
  - `data-loading`
  - `data-disabled`
  - `data-open`
  - `data-active`
  - `data-invalid`

### Scalability principles
- Modular folders by component.
- Strict TypeScript.
- Tree-shakable exports (`sideEffects: false`, per-component exports).
- Compound/slot patterns for composition (`Card`, `Dropdown`, `Tabs`).
- Controlled/uncontrolled patterns where relevant.

## 2) Folder Structure

```txt
root/
  ui-library/
    src/
      components/
        Button/
        Card/
        Input/
        Modal/
        Dropdown/
        Tabs/
        Toast/
      hooks/
      types/
      utils/
      index.ts
    docs/components/
    tests/
    package.json
    README.md
  demo-food-app/
    src/
      app/
        router/
        theme/
      pages/
      components/
      data/
      snippets/
      styles/
      main.tsx
    tests/
    package.json
    README.md
```

## 3) Library

### Included components
- `Button`
- `Card`
- `Input`
- `Modal`
- `Dropdown`
- `Tabs`
- `Toast`

### API features delivered
- Polymorphic `as` support.
- Render props for stateful content/custom rendering.
- Slot/compound component patterns.
- Class injection hooks for every component.
- Accessibility-first keyboard and ARIA behavior.

### Component docs
Per-component docs are in:
- `ui-library/docs/components/button.md`
- `ui-library/docs/components/card.md`
- `ui-library/docs/components/input.md`
- `ui-library/docs/components/modal.md`
- `ui-library/docs/components/dropdown.md`
- `ui-library/docs/components/tabs.md`
- `ui-library/docs/components/toast.md`

## 4) Demo App

### Pages
- `/` Home
- `/restaurant/:id` Restaurant details
- `/cart`
- `/checkout`
- `/profile`
- `/components`
- `/docs/button`
- `/docs/card`
- `/docs/input`

### Theme switching
- Implemented only in `demo-food-app/src/app/theme`.
- Themes:
  - `light-food`
  - `dark-neon`
- Toggle updates all component visuals instantly without changing library source.

## 5) Docs Pages

In-app docs routes include live preview + code snippets:
- `/docs/button`
- `/docs/card`
- `/docs/input`

## 6) Tests

### Library tests (`ui-library/tests`)
- Behavior and interaction tests for all components.
- Accessibility checks for semantics/roles/states.
- No visual-style assertions.

### Demo tests (`demo-food-app/tests`)
- Theme switch integration.
- Cross-page integration (routing + component usage).

## 7) Setup Instructions

### Install and verify library

```bash
cd ui-library
npm install
npm run build
npm run test
```

### Install and run demo app

```bash
cd ../demo-food-app
npm install
npm run dev
```

### Run demo tests

```bash
npm run test
```

## Reusability Proof (`npm link`)

From `ui-library`:

```bash
npm run build
npm link
```

From another consumer app:

```bash
npm link @headless-food/ui-library
```

## Versioning Policy

Semantic Versioning:
- `MAJOR`: breaking API changes.
- `MINOR`: backward-compatible features.
- `PATCH`: fixes and non-breaking accessibility improvements.

### Breaking change examples
- Removed/renamed prop.
- Changed controlled-state contract.
- Changed slot hierarchy behavior.

### Non-breaking examples
- Added optional prop.
- Added new component.
- ARIA enhancement with same API.

### Migration example
If a prop is removed in a major release:
1. Replace usage with recommended alternative (render prop/slot).
2. Update tests around affected interactions.
3. Validate keyboard + ARIA behavior before release.
