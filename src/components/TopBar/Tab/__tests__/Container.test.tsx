import React from "react";
import TestRenderer from "react-test-renderer";

/* Uncomment below if needed */
// import { render, getByTestId } from "@testing-library/react";

import { Container } from "../Container";

/* Uncomment below if You need/want to use enzyme */
// import enzyme from "enzyme";

/* Component mock example */
// jest.mock("[module]", () => ({
//   [ComponentName]: ({children, ...rest}: React.PropsWithChildren<{}>) => (
//     <div id="[ComponentName]" {...rest}>{children}</div>
//   )
// }));

describe("components", () => {
  describe("TopBar.Container", () => {
    it("should render Container component", () => {
      const tree = TestRenderer.create(<Container />);

      expect(tree).toMatchSnapshot();
    });
  });
});
