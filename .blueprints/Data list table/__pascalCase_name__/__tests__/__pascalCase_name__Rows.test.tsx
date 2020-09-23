/* eslint-disable react/display-name */
import React from "react";
import TestRenderer from "react-test-renderer";
import { useHistory } from "react-router-dom";
import { useResource } from "rest-hooks";

import { {{pascalCase name}}Rows } from "../{{pascalCase name}}Rows";
import { useListResource } from "hooks/useListResource";

import enzyme from "enzyme";

jest.mock("hooks/useListResource", () => ({
  useListResource: jest.fn().mockReturnValue({ items: [] })
}));

jest.mock("rest-hooks", () => ({
  useResource: jest.fn().mockReturnValue([{ items: [] }, { items: [] }])
}));

jest.mock("api/resources/customer/CustomerResource", () => ({
  listShape: jest.fn().mockReturnValue("CustomerResource.listShape")
}));

const itemsListFixture = [
  {
    id: "id1",
    createDate: "date1",
    updateDate: "date2",
    pk: () => "pk1"
  },
  {
    id: "id2",
    createDate: "date2",
    updateDate: "date3",
    pk: () => "primaryKey"
  }
];


describe("views", () => {
  describe("{{pascalCase name}}", () => {
    describe("{{pascalCase name}}Rows", () => {
      beforeEach(() => {
        (useResource as jest.Mock).mockReset();
      });

      it("should render empty {{pascalCase name}}Rows component", () => {
        const tree = TestRenderer.create(<{{pascalCase name}}Rows />);
        expect(tree).toMatchSnapshot();
      });

      it("should render rows with items data", () => {
        (useListResource as jest.Mock).mockReturnValueOnce({
          items: itemsListFixture
        });
        const tree = TestRenderer.create(<{{pascalCase name}}Rows />);
        expect(tree).toMatchSnapshot();
      });

      it("should redirect on item click", () => {
        (useListResource as jest.Mock).mockReturnValueOnce({
          items: [itemsListFixture[1]]
        });

        const component = enzyme.mount(<{{pascalCase name}}Rows />, {
          wrappingComponent: ({ children }: React.PropsWithChildren<{}>) => (
            <table>
              <tbody>{children}</tbody>
            </table>
          )
        });
        const { push } = useHistory();
        component.find("tr").simulate("click");
        expect(push).toHaveBeenCalledTimes(1);
        expect(push).toHaveBeenCalledWith("/product/primaryKey");
      });
    });
  });
});
