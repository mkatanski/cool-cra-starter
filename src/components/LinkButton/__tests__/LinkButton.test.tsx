import React from "react";
import TestRenderer from "react-test-renderer";

import { LinkButton } from "../LinkButton";
import { withThemeProvider } from "__tests-helpers__/withThemeProvider";

describe("components", () => {
  describe("LinkButton", () => {
    it("should render LinkButton component", () => {
      const tree = TestRenderer.create(withThemeProvider(<LinkButton />));

      expect(tree).toMatchSnapshot();
    });
  });
});
