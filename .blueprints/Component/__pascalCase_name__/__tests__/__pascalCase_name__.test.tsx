import React from "react";
import TestRenderer from "react-test-renderer";


/* Uncomment below if needed */
// import { withThemeProvider, withDesktopSize } from 'testsHelpers';
// import { render, getByTestId } from "@testing-library/react";

import { {{pascalCase name}} } from "../{{pascalCase name}}";

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
    it("should render {{pascalCase name}} component", () => {
      const tree = TestRenderer.create(<{{ pascalCase name }} />);

      expect(tree).toMatchSnapshot();
    });
  });
});
