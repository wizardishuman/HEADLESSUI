import { Card } from "@headless-food/ui-library";
import { NavLink, Outlet } from "react-router-dom";
import { useDemoTheme } from "../../app/theme/ThemeProvider";
import { docsNavItems } from "./docsNavigation";

export const DocsLayout = () => {
  const { theme } = useDemoTheme();

  return (
    <section className={`docs-shell ${theme.app.panel}`}>
      <aside className={`docs-sidebar ${theme.card.root}`}>
        <h2 className={theme.card.header}>Components</h2>
        <p className="docs-sidebar-subtitle">Headless UI docs</p>
        <nav aria-label="Component documentation navigation" className="docs-nav">
          {docsNavItems.map((item) => (
            <NavLink
              key={item.slug}
              to={`/docs/${item.slug}`}
              className={({ isActive }) => `docs-link ${isActive ? "docs-link-active" : ""}`}
            >
              <span className="docs-link-title">{item.label}</span>
              <span className="docs-link-description">{item.description}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="docs-content">
        <Outlet />
      </div>
    </section>
  );
};
