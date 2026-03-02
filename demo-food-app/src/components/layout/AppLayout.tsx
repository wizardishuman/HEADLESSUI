import { Button, Toast } from "@headless-food/ui-library";
import * as React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDemoTheme } from "../../app/theme/ThemeProvider";

const links = [
  { to: "/", label: "Home" },
  { to: "/restaurant/spice-route", label: "Restaurant" },
  { to: "/cart", label: "Cart" },
  { to: "/checkout", label: "Checkout" },
  { to: "/profile", label: "Profile" },
  { to: "/components", label: "Components" },
  { to: "/docs", label: "Docs" }
];

export const AppLayout = () => {
  const { theme, themeName, toggleTheme } = useDemoTheme();
  const [toastOpen, setToastOpen] = React.useState(false);

  return (
    <div className={theme.app.shell}>
      <header className={theme.app.nav}>
        <h1 className={theme.app.heading}>Food Delivery Demo</h1>
        <nav aria-label="Main navigation">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${theme.app.navLink} ${isActive ? "is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Button
          className={theme.button.secondary}
          onClick={() => {
            toggleTheme();
            setToastOpen(true);
          }}
        >
          Switch Theme ({themeName})
        </Button>
      </header>
      <main className={theme.app.content}>
        <Outlet />
      </main>
      <Toast
        open={toastOpen}
        onOpenChange={setToastOpen}
        className={theme.toast.container}
        closeButtonClassName={theme.toast.close}
      >
        Theme switched successfully.
      </Toast>
    </div>
  );
};
