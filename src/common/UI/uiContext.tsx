import { darkTheme, lightTheme } from "@/styles/theme";
import { FC, useMemo } from "react";
import { ThemeProvider } from "styled-components";

export const ManagedUIContext: FC<any> = ({ children }) => {
  const localTheme = localStorage.getItem("theme");

  const themeMode = useMemo((): string => {
    if (localTheme) return localTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }, [localTheme]);
  return (
    <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};
