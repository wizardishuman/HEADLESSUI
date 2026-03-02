import { Button } from "@headless-food/ui-library";
import { Link } from "react-router-dom";
import { useDemoTheme } from "../app/theme/ThemeProvider";

export const NotFoundPage = () => {
  const { theme } = useDemoTheme();
  return (
    <section className={theme.app.panel}>
      <h2>Page Not Found</h2>
      <Button as={Link} to="/" className={theme.button.primary}>
        Go Home
      </Button>
    </section>
  );
};
