import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import { ThemeName } from "config/themes";
import { LinkButton } from "components/LinkButton";

export type ThemeSwitchButtonProps = {};

export const ThemeSwitchButton: React.FC<ThemeSwitchButtonProps> = () => {
  const { themeMode, changeTheme } = useContext(ThemeContext);

  const handleClick = () => {
    if (themeMode === ThemeName.Light) {
      changeTheme(ThemeName.Dark);
    } else {
      changeTheme(ThemeName.Light);
    }
  };

  return <LinkButton onClick={handleClick}>Switch</LinkButton>;
};
