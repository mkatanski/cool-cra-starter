import React from "react";
import TestRenderer from "react-test-renderer";

import { UnauthenticatedRoute } from "../UnauthenticatedRoute";
import { UserStateContext } from "lib/user";

const TestComponent = () => <div>TestComponent</div>;

describe("routes", () => {
  describe("UnauthenticatedRoute", () => {
    it("should render UnauthenticatedRoute component with default context", () => {
      const tree = TestRenderer.create(
        <UnauthenticatedRoute component={TestComponent} />
      );
      expect(tree).toMatchSnapshot();
    });

    it("should render redirect to dashboard if user is authenticated", () => {
      const tree = TestRenderer.create(
        <UserStateContext.Provider
          value={{ isLoggedIn: true, username: "test" }}
        >
          <UnauthenticatedRoute component={TestComponent} />
        </UserStateContext.Provider>
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
