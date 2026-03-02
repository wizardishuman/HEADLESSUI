import * as React from "react";
import type { DemoThemeContract, DemoThemeName } from "./themeTokens";
import { demoThemes } from "./themeTokens";

type ThemeContextValue = {
  themeName: DemoThemeName;
  setThemeName: (name: DemoThemeName) => void;
  toggleTheme: () => void;
  theme: DemoThemeContract;
};

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export const DemoThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = React.useState<DemoThemeName>("light-food");

  const toggleTheme = React.useCallback(() => {
    setThemeName((current) => (current === "light-food" ? "dark-neon" : "light-food"));
  }, []);

  const value = React.useMemo(
    () => ({
      themeName,
      setThemeName,
      toggleTheme,
      theme: demoThemes[themeName]
    }),
    [themeName, toggleTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useDemoTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useDemoTheme must be used inside DemoThemeProvider.");
  }
  return context;
};
