import React from "react";
import TestRenderer from "react-test-renderer";

import { AuthenticatedRoute } from "../AuthenticatedRoute";
import { UserStateContext } from "lib/user";

const TestComponent = () => <div>TestComponent</div>;

describe("routes", () => {
  describe("AuthenticatedRoute", () => {
    it("should render AuthenticatedRoute component with default context", () => {
      const tree = TestRenderer.create(
        <AuthenticatedRoute component={TestComponent} />
      );
      expect(tree).toMatchSnapshot();
    });

    it("should render AuthenticatedRoute component with user context", () => {
      const tree = TestRenderer.create(
        <UserStateContext.Provider
          value={{ isLoggedIn: true, username: "test" }}
        >
          <AuthenticatedRoute component={TestComponent} />
        </UserStateContext.Provider>
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
