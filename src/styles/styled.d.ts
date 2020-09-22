/* eslint-disable @typescript-eslint/no-empty-interface */
import { DefaultTheme } from "styled-components";
import { StyledTheme } from "styles/_types";
import { palette } from "styles/palette";

declare module "styled-components" {
  export interface DefaultTheme {
    elements: StyledTheme;
    palette;
  }
}
