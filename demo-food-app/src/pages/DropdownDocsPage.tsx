import { Dropdown } from "@headless-food/ui-library";
import { useDemoTheme } from "../app/theme/ThemeProvider";
import { DocPage } from "../components/docs/DocPage";
import { dropdownSnippet } from "../snippets/componentSnippets";

export const DropdownDocsPage = () => {
  const { theme } = useDemoTheme();

  return (
    <DocPage
      title="Dropdown Docs"
      description="Compound menu component with trigger, menu, item slots, and keyboard navigation."
      preview={
        <Dropdown className={theme.dropdown.root}>
          <Dropdown.Trigger className={theme.dropdown.trigger}>Open Menu</Dropdown.Trigger>
          <Dropdown.Menu className={theme.dropdown.menu}>
            <Dropdown.Item className={theme.dropdown.item}>Top Rated</Dropdown.Item>
            <Dropdown.Item className={theme.dropdown.item}>Fastest ETA</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      }
      code={dropdownSnippet}
    />
  );
};
