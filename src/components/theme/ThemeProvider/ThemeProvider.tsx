import React, { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { ThemeName } from "config/themes";

export const LS_THEME_KEY = "theme";

export const getSavedMode = (): ThemeName | undefined =>
  window.localStorage.getItem(LS_THEME_KEY) as ThemeName;

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: ThemeName;
};

export const ThemeProvider = ({
  children,
  defaultTheme = ThemeName.Light,
}: ThemeProviderProps) => {
  const [themeState, setThemeState] = useState<ThemeName>(
    getSavedMode() || defaultTheme
  );

  const changeTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
  };

  useEffect(() => {
    window.localStorage.setItem(LS_THEME_KEY, themeState);
  }, [themeState]);

  return (
    <ThemeContext.Provider
      value={{
        themeMode: themeState,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
