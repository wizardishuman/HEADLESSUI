import { DemoThemeProvider } from "./theme/ThemeProvider";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <DemoThemeProvider>
      <AppRouter />
    </DemoThemeProvider>
  );
};
