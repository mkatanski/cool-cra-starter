/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import App from "App";

import { UserStateContext } from "lib/user";
import Routes from "../routes";

import { withThemeProvider } from "__tests-helpers__/withThemeProvider";

jest.mock("routes", () => jest.fn());

jest.mock("react-router-dom", () => ({
  BrowserRouter: (props: React.PropsWithChildren<{}>) => (
    <div id="BrowserRouter">{props.children}</div>
  ),
}));

jest.mock("components/fallbacks/LoadingScreen", () => ({
  LoadingScreen: jest.fn(() => {
    return <div id="LoadingScreen" />;
  }),
}));

describe("App", () => {
  it("should render App component", async () => {
    (Routes as jest.Mock).mockImplementationOnce(() => <div>Routes</div>);

    const tree = TestRenderer.create(
      <UserStateContext.Provider value={{ isLoggedIn: true, username: "test" }}>
        <App />
      </UserStateContext.Provider>
    );
    expect(tree).toMatchSnapshot();
  });

  it("should render a loading screen as a fallback", async () => {
    (Routes as jest.Mock).mockImplementationOnce(() => {
      throw new Promise((r) => {
        r();
      });
    });
    const tree = TestRenderer.create(withThemeProvider(<App />));
    expect(tree).toMatchSnapshot();
  });
});
