import { {{pascalCase name}}StateContext, {{pascalCase name}}DispatchContext } from "../{{camelCase name}}Contexts";
import { makeStoreContexts } from "utils/store";
import { defaultState } from "../{{camelCase name}}State";

jest.mock("utils/store/makeStoreContexts", () => ({
  makeStoreContexts: jest.fn().mockReturnValue(["contextA", "contextB"])
}));

describe("lib/{{camelCase name}}", () => {
  describe("contexts", () => {
    describe("{{pascalCase name}}StateContext", () => {
      it("should create contexts", () => {
        expect({{pascalCase name}}StateContext).toBe("contextA");
        expect({{pascalCase name}}DispatchContext).toBe("contextB");
        expect(makeStoreContexts).toHaveBeenCalledTimes(1);
        expect(makeStoreContexts).toHaveBeenCalledWith(defaultState);
      });
    });
  });
});
