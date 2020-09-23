/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";

import PublicLayout from "../PublicLayout";

jest.mock(
  "layouts/LayoutBase",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="LayoutBase" {...rest}>
      {children}
    </div>
  )
);

describe("layouts", () => {
  describe("PublicLayout", () => {
    it("should render PublicLayout component", async () => {
      const tree = TestRenderer.create(<PublicLayout />);
      expect(tree).toMatchSnapshot();
    });

    it("should render PublicLayout with children", () => {
      const tree = TestRenderer.create(
        <PublicLayout>Some children</PublicLayout>
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
