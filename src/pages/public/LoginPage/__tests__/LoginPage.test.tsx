/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import enzyme from "enzyme";

import { UserStateContext } from "lib/user";
import LoginPage from "../LoginPage";

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
    });
  });
});
