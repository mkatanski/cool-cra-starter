import { StyledTheme } from "styles/_types";
import { palette } from "styles/palette";

import { MainContainerTheme } from "./main";

export const TopBarContainerTheme: StyledTheme = {
  ...MainContainerTheme,
  container: {
    background: palette.holly,
    text: {
      primary: palette.beautyBush,
    },
  },
};
