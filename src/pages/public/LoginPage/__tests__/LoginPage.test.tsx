/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import enzyme from "enzyme";

import { UserStateContext } from "lib/user";
import LoginPage from "../LoginPage";

jest.mock("views/LoginForm", () => ({
  LoginForm: ({
    onClickForgotPassword,
  }: {
    onClickForgotPassword: () => void;
  }) => <div id="LoginForm" onClick={onClickForgotPassword} />,
}));

jest.mock("components/SwipeableColumns", () => {
  const SwipeableColumns = ({ children }: React.PropsWithChildren<{}>) => (
    <span id="SwipeableColumns">{children}</span>
  );
  SwipeableColumns.LeftColumn = ({ children }: React.PropsWithChildren<{}>) => (
    <span id="LeftColumn">{children}</span>
  );
  SwipeableColumns.RightColumn = ({
    children,
  }: React.PropsWithChildren<{}>) => <span id="RightColumn">{children}</span>;

  return {
    SwipeableColumns,
  };
});

describe("pages", () => {
  describe("public", () => {
    describe("LoginPage", () => {
      it("should render LoginPage component", () => {
        const tree = TestRenderer.create(<LoginPage />);
        expect(tree).toMatchSnapshot();
      });

      it("should render Redirect component", () => {
        const tree = TestRenderer.create(
          <UserStateContext.Provider
            value={{ isLoggedIn: true, username: "test" }}
          >
            <LoginPage />
          </UserStateContext.Provider>
        );
        expect(tree).toMatchSnapshot();
      });

      it("should render LoginPage should render active right column", () => {
        const component = enzyme.mount(
          <UserStateContext.Provider
            value={{ isLoggedIn: true, username: "test" }}
          >
            <LoginPage />
          </UserStateContext.Provider>
        );

        expect(component).toMatchSnapshot();
      });
      it("should render LoginPage should render active left column", () => {
        const component = enzyme.mount(
          <UserStateContext.Provider
            value={{ isLoggedIn: true, username: "test" }}
          >
            <LoginPage />
          </UserStateContext.Provider>
        );

        component.find("LoginForm").simulate("click");

        expect(component).toMatchSnapshot();
      });
    });
  });
});
