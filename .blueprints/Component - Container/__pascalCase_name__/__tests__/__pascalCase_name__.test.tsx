/* eslint-disable react/display-name */
import React from "react";
import enzyme from "enzyme";

/* Uncomment below if needed */
// import TestRenderer from "react-test-renderer";
// import { render, getByTestId } from "@testing-library/react";

import { {{pascalCase name}} } from "../{{pascalCase name}}";

// Component mock example
// jest.mock("[module]", () => ({
//   [ComponentName]: ({children, ...rest}: React.PropsWithChildren<{}>) => (
//     <div id="[ComponentName]" {...rest}>{children}</div>
//   )
// }));

describe("components", () => {
  describe("{{pascalCase name}}", () => {
    it("should render {{pascalCase name}}View", () => {
      const component = enzyme.shallow(
        <{{pascalCase name}} />
      );
      expect(component.find("{{pascalCase name}}View").exists()).toBe(true);
    });
  });
});
