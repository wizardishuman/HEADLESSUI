import { Button, Input, Tabs } from "@headless-food/ui-library";
import { useDemoTheme } from "../app/theme/ThemeProvider";

export const ProfilePage = () => {
  const { theme } = useDemoTheme();

  return (
    <section className={theme.app.panel}>
      <h2>Profile</h2>
      <Tabs defaultValue="account">
        <Tabs.List className={theme.tabs.list} aria-label="Profile sections">
          <Tabs.Trigger value="account" className={theme.tabs.trigger}>
            Account
          </Tabs.Trigger>
          <Tabs.Trigger value="preferences" className={theme.tabs.trigger}>
            Preferences
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account" className={theme.tabs.content}>
          <Input
            label="Full Name"
            placeholder="Saurabh"
            className={theme.input.root}
            labelClassName={theme.input.label}
            inputClassName={theme.input.field}
            messageClassName={theme.input.message}
          />
          <Input
            label="Phone"
            placeholder="+91..."
            className={theme.input.root}
            labelClassName={theme.input.label}
            inputClassName={theme.input.field}
            messageClassName={theme.input.message}
          />
          <Button className={theme.button.primary}>Save Profile</Button>
        </Tabs.Content>
        <Tabs.Content value="preferences" className={theme.tabs.content}>
          <Button className={theme.button.secondary}>Enable Night Deliveries</Button>
        </Tabs.Content>
      </Tabs>
    </section>
  );
};
