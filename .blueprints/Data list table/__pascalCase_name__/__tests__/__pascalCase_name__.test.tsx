/* eslint-disable react/display-name */
import React from "react";

/* Uncomment below if needed */
import TestRenderer from "react-test-renderer";
// import { render, getByTestId } from "@testing-library/react";

import { {{pascalCase name}} } from "../{{pascalCase name}}";
import { {{pascalCase name}}Rows } from "../{{pascalCase name}}Rows";

jest.mock("../{{pascalCase name}}Rows", () => ({
  {{pascalCase name}}Rows: jest.fn((props: {}) => {
    return <tr id="{{pascalCase name}}Rows" data-props={props} />;
  })
}));

jest.mock("components/data-list/DataListSkeleton", () => ({
  DataListSkeleton: (props: { columns: number }) => (
    <tr id="DataListSkeleton" data-props={props} />
  )
}));

jest.mock("components/data-list/DataListTableHeader", () => ({
  DataListTableHeader: (props: { columns: number }) => (
    <td id="DataListTableHeader" data-props={props} />
  )
}));

describe("views", () => {
  describe("{{pascalCase name}}", () => {
    it("should render {{pascalCase name}} component", () => {
      const tree = TestRenderer.create(<{{pascalCase name}} />);
      expect(tree).toMatchSnapshot();
    });

    it("should render {{pascalCase name}} component with data loading skeleton", () => {
      ({{pascalCase name}}Rows as jest.Mock).mockImplementationOnce(() => {
        throw new Promise(r => {
          r();
        });
      });
      const tree = TestRenderer.create(<{{pascalCase name}} />);
      expect(tree).toMatchSnapshot();
    });
  });
});
