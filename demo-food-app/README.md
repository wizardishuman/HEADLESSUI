# demo-food-app

Consumer application for `@headless-food/ui-library`.  
Implements a food delivery UI with app-level theming and React Router routes.

## Pages

- `/` Home (restaurant listing)
- `/restaurant/:id` Restaurant details
- `/cart`
- `/checkout`
- `/profile`
- `/components` Component showcase
- `/docs/button`
- `/docs/card`
- `/docs/input`

## Theme System

Theme logic lives only in the demo app:
- `src/app/theme/themeTokens.ts`
- `src/app/theme/ThemeProvider.tsx`

Themes:
- `light-food`
- `dark-neon`

Switching themes updates every library component instantly without modifying library source.

## Run

```bash
npm install
npm run dev
```

## Test

```bash
npm run test
```
