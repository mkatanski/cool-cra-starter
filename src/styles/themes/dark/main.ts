import { StyledTheme } from "styles/_types";
import { palette } from "styles/palette";

export const MainContainerTheme: StyledTheme = {
  container: {
    background: palette.outerSpace,
    text: {
      primary: palette.beautyBush,
      inverse: palette.holly,
      secondary: palette.opium,
    },
  },

  button: {
    text: {
      default: palette.beautyBush,
      hover: palette.holly,
    },
    background: {
      default: palette.holly,
      hover: palette.opium,
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
