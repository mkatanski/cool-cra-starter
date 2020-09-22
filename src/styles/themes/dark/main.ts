import { StyledTheme } from "styles/_types";
import { palette } from "styles/palette";

export const MainContainerTheme: StyledTheme = {
  container: {
    background: palette.concrete,
    text: {
      primary: palette.holly,
      inverse: palette.beautyBush,
      secondary: palette.outerSpace,
    },
  },

  button: {
    text: {
      default: palette.holly,
      hover: palette.outerSpace,
    },
    background: {
      default: palette.azalea,
      hover: palette.charm,
    },
  },

  input: {
    background: {
      default: palette.azalea,
      hover: palette.azalea,
    },
    text: {
      primary: palette.holly,
      inverse: palette.beautyBush,
      secondary: palette.outerSpace,
    },
  },

  table: {
    background: palette.beautyBush,
    border: palette.wewak,
    text: {
      primary: palette.holly,
      inverse: palette.beautyBush,
      secondary: palette.outerSpace,
    },
  },

  tableHeader: {
    background: palette.beautyBush,
    border: palette.wewak,
    text: {
      primary: palette.holly,
      inverse: palette.beautyBush,
      secondary: palette.outerSpace,
    },
  },

  tableRowEven: {
    background: palette.wewak,
    border: palette.wewak,
    text: {
      primary: palette.holly,
      inverse: palette.beautyBush,
      secondary: palette.outerSpace,
    },
  },

  tableRowOdd: {
    background: palette.beautyBush,
    border: palette.wewak,
    text: {
      primary: palette.holly,
      inverse: palette.beautyBush,
      secondary: palette.outerSpace,
    },
  },
};
