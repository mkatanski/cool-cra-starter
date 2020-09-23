/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";

import HomePage from "../HomePage";

describe("pages", () => {
  describe("protected", () => {
    describe("HomePage", () => {
      it("should render HomePage component", () => {
        const tree = TestRenderer.create(<HomePage />);
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
