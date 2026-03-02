export type DocsNavItem = {
  slug: string;
  label: string;
  description: string;
};

export const docsNavItems: DocsNavItem[] = [
  {
    slug: "button",
    label: "Button",
    description: "Action trigger with loading and disabled states."
  },
  {
    slug: "card",
    label: "Card",
    description: "Composable container with header/body/footer slots."
  },
  {
    slug: "input",
    label: "Input",
    description: "Accessible field with validation hooks."
  },
  {
    slug: "modal",
    label: "Modal",
    description: "Dialog primitive with focus and escape handling."
  },
  {
    slug: "dropdown",
    label: "Dropdown",
    description: "Menu trigger with keyboard navigation."
  },
  {
    slug: "tabs",
    label: "Tabs",
    description: "Tabbed views with ARIA roles and selection state."
  },
  {
    slug: "toast",
    label: "Toast",
    description: "Polite live-region notifications."
  }
];
