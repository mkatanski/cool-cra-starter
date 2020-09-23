/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";

import EmptyPage from "../EmptyPage";

describe("pages", () => {
  describe("protected", () => {
    describe("EmptyPage", () => {
      it("should render EmptyPage component", () => {
        const tree = TestRenderer.create(<EmptyPage />);
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
