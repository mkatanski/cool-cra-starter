/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";

import DefaultLayout from "../DefaultLayout";

jest.mock("react-router-dom", () => ({
  useLocation: () => ({ pathname: "testPath" }),
}));

jest.mock(
  "layouts/LayoutBase",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="LayoutBase" {...rest}>
      {children}
    </div>
  )
);

jest.mock("components/TopBar", () => ({
  TopBar: ({ children }: React.PropsWithChildren<{}>) => (
    <div id="TopBar">{children}</div>
  ),
}));

describe("layouts", () => {
  describe("DefaultLayout", () => {
    it("should render DefaultLayout with children", () => {
      const tree = TestRenderer.create(
        <DefaultLayout>Some children</DefaultLayout>
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
