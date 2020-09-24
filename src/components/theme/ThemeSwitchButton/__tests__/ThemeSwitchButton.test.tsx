import React, { useContext } from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { ThemeSwitchButton } from "../ThemeSwitchButton";
import { withThemeProvider } from "__tests-helpers__/withThemeProvider";
import { ThemeName } from "config/themes";

import { render, fireEvent, getByTestId } from "@testing-library/react";

jest.mock("react", () => {
  const ActualReact = require.requireActual("react");
  return {
    ...ActualReact,
    useContext: jest.fn(),
  };
});

const useContextMock = useContext as jest.Mock;

describe("components", () => {
  describe("ThemeSwitchButton", () => {
    it("should render ThemeSwitchButton component", () => {
      const handleToogleClick = jest.fn();
      useContextMock.mockReturnValue({
        themeMode: ThemeName.Light,
        changeTheme: handleToogleClick,
      });

      const tree = TestRenderer.create(
        withThemeProvider(<ThemeSwitchButton />)
      );

      expect(tree).toMatchSnapshot();
    });

    it("should call themeToggle method", () => {
      const handleToogleClick = jest.fn();
      useContextMock.mockReturnValue({
        themeMode: ThemeName.Light,
        changeTheme: handleToogleClick,
      });

      const { container } = render(withThemeProvider(<ThemeSwitchButton />));

      fireEvent.click(getByTestId(container, "ThemeToggleButton"));
      expect(handleToogleClick).toHaveBeenCalledTimes(1);
    });
  });
});
