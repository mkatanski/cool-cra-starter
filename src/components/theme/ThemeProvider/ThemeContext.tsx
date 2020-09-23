import { ThemeName } from "config/themes";
import { createPartialContext } from "utils/helpers/createPartialContext";

export type ThemeContextProps = {
  themeMode: ThemeName;
  changeTheme: (newTheme: ThemeName) => void;
};

export const ThemeContext = createPartialContext<ThemeContextProps>({
  themeMode: ThemeName.Light,
});
