import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { StyledTheme } from "styles/_types";
import { palette } from "styles/palette";
import { ThemeName } from "config/themes";
import { ThemeContext } from "components/theme/ThemeProvider";

export type ThemedContainerProps = {
  themes: { [key in ThemeName]: StyledTheme };
  children: React.ReactNode;
};

export const ThemedContainer: React.FC<ThemedContainerProps> = ({
  children,
  themes,
}: ThemedContainerProps) => {
  const { themeMode } = useContext(ThemeContext);
  const theme = themes[themeMode];

  return (
    <ThemeProvider
      theme={{
        elements: theme,
        palette: palette,
      }}
    >
      {children}
    </ThemeProvider>
  );
};
