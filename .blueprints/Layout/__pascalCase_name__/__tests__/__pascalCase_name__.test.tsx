import React from "react";
import TestRenderer from "react-test-renderer";


import {{pascalCase name}} from "../{{pascalCase name}}";

// Uncomment below if You need/want to use enzyme
// import enzyme from "enzyme";

// Component mock example
// jest.mock("[module]", () => ({
//   [ComponentName]: ({children, ...rest}: React.PropsWithChildren<{}>) => (
//     <div id="[ComponentName]" {...rest}>{children}</div>
//   )
// }));

jest.mock(
  "layouts/LayoutBase",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="LayoutBase" {...rest}>
      {children}
    </div>
  )
);

describe("layouts", () => {
  describe("{{pascalCase name}}", () => {
    it("should render {{pascalCase name}} component", async () => {
      const tree = TestRenderer.create(<{{pascalCase name}} />);
      expect(tree).toMatchSnapshot();
    });

    it("should render {{pascalCase name}} with children", () => {
      const tree = TestRenderer.create(
        <{{pascalCase name}}>Some children</{{pascalCase name}}>
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
