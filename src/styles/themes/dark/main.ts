import { StyledTheme } from "styles/_types";
import { palette } from "styles/palette";

export const MainContainerTheme: StyledTheme = {
  container: {
    background: palette.ebonyClay,
    text: {
      primary: palette.athensGray,
      inverse: palette.manatee,
      secondary: palette.manatee,
    },
  },

  button: {
    text: {
      default: palette.manatee,
      hover: palette.athensGray,
    },
    background: {
      default: palette.charade,
      hover: palette.heliotrope,
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
