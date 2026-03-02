import { Tabs } from "@headless-food/ui-library";
import { useDemoTheme } from "../app/theme/ThemeProvider";
import { DocPage } from "../components/docs/DocPage";
import { tabsSnippet } from "../snippets/componentSnippets";

export const TabsDocsPage = () => {
  const { theme } = useDemoTheme();

  return (
    <DocPage
      title="Tabs Docs"
      description="Tabs component with controlled/uncontrolled selection and accessible tab-panel semantics."
      preview={
        <Tabs defaultValue="overview">
          <Tabs.List className={theme.tabs.list} aria-label="Docs tabs">
            <Tabs.Trigger value="overview" className={theme.tabs.trigger}>
              Overview
            </Tabs.Trigger>
            <Tabs.Trigger value="details" className={theme.tabs.trigger}>
              Details
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="overview" className={theme.tabs.content}>
            Overview panel content.
          </Tabs.Content>
          <Tabs.Content value="details" className={theme.tabs.content}>
            Details panel content.
          </Tabs.Content>
        </Tabs>
      }
      code={tabsSnippet}
    />
  );
};
