import React from "react";
import TestRenderer from "react-test-renderer";


/* Uncomment below if needed */
// import { withThemeProvider, withDesktopSize } from 'testsHelpers';
// import { render, getByTestId } from "@testing-library/react";

import { {{pascalCase name}}View } from "../{{pascalCase name}}.view";

/* Uncomment below if You need/want to use enzyme */
// import enzyme from "enzyme";

/* Component mock example */
// jest.mock("[module]", () => ({
//   [ComponentName]: ({children, ...rest}: React.PropsWithChildren<{}>) => (
//     <div id="[ComponentName]" {...rest}>{children}</div>
//   )
// }));

describe("components", () => {
  describe("{{pascalCase name}}", () => {
    describe("{{pascalCase name}}View", () => {
      it("should render {{pascalCase name}}View component", () => {
        const tree = TestRenderer.create(<{{pascalCase name}}View />);
        expect(tree).toMatchSnapshot();
      });

      it("should render {{pascalCase name}}View component with children", () => {
        const tree = TestRenderer.create(<{{pascalCase name}}View>child</{{pascalCase name}}View>);
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
