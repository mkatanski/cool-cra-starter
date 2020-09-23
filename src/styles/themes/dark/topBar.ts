import { StyledTheme } from "styles/_types";
import { palette } from "styles/palette";

import { MainContainerTheme } from "./main";

export const TopBarContainerTheme: StyledTheme = {
  ...MainContainerTheme,
  container: {
    background: palette.heliotrope,
    text: {
      primary: palette.athensGray,
    },
  },

  button: {
    text: {
      default: palette.athensGray,
      hover: palette.athensGray,
    },
    background: {
      default: palette.heliotrope,
      hover: palette.manatee,
    },
  },
};
