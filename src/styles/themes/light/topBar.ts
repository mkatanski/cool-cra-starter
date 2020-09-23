import { StyledTheme } from "styles/_types";
import { palette } from "styles/palette";

import { MainContainerTheme } from "./main";

export const TopBarContainerTheme: StyledTheme = {
  ...MainContainerTheme,
  container: {
    background: palette.bahamaBlue,
    text: {
      primary: palette.concrete,
    },
  },
  button: {
    text: {
      default: palette.concrete,
    },
    background: {
      default: palette.bahamaBlue,
      hover: palette.charm,
    },
  },
};
