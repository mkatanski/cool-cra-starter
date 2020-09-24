import React from "react";
import { ThemeContext } from "components/theme/ThemeProvider";
import { StyledTheme } from "styles/_types";
import { ThemeName } from "config/themes";
import { ThemeProvider } from "styled-components";
import { palette } from "styles/palette";

const TestTheme: StyledTheme = {
  container: {
    background: "container.background",
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },

  button: {
    text: {
      default: "palette.holly",
      hover: "palette.outerSpace",
    },
    background: {
      default: "palette.azalea",
      hover: "palette.charm",
    },
  },

  input: {
    background: {
      default: "palette.azalea",
      hover: "palette.azalea",
    },
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },

  table: {
    background: "palette.beautyBush",
    border: "palette.wewak",
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },

  tableHeader: {
    background: "palette.beautyBush",
    border: "palette.wewak",
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },

  tableRowEven: {
    background: "palette.wewak",
    border: "palette.wewak",
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },

  tableRowOdd: {
    background: "palette.beautyBush",
    border: "palette.wewak",
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },
};

export const withThemeProvider = (Component: React.ReactNode) => (
  <ThemeContext.Provider
    value={{
      themeMode: ThemeName.Light,
      changeTheme: jest.fn(),
    }}
  >
    <ThemeProvider
      theme={{
        elements: TestTheme,
        palette: palette,
      }}
    >
      {Component}
    </ThemeProvider>
  </ThemeContext.Provider>
);
