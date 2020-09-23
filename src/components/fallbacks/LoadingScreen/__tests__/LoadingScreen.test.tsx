import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { LoadingScreen } from "../LoadingScreen";

describe("components/fallbacks", () => {
  describe("LoadingScreen", () => {
    it("should render LoadingScreen component", () => {
      const tree = TestRenderer.create(<LoadingScreen />);

      expect(tree).toMatchSnapshot();
    });
  });
});
