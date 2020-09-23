/* eslint-disable react/display-name */
import { {{pascalCase name}}Provider } from "../{{camelCase name}}Provider";
import { makeStoreProvider } from "utils/store";
import { {{pascalCase name}}StateContext, {{pascalCase name}}DispatchContext } from "../{{camelCase name}}Contexts";
import { {{camelCase name}}Reducer } from "../{{camelCase name}}Reducer";
import { defaultState } from "../{{camelCase name}}State";

jest.mock("utils/store/makeStoreProvider", () => ({
  makeStoreProvider: jest.fn()
}));

describe("lib/{{camelCase name}}", () => {
  describe("{{pascalCase name}}Provider", () => {
    // {{pascalCase name}}Provider has to be assigned,
    // otherwise it may not be created and test will fail
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let Provider;

    beforeAll(() => {
      Provider = {{pascalCase name}}Provider;
    });

    it("should create {{camelCase name}} provider component", () => {
      expect(makeStoreProvider).toBeCalledTimes(1);
      expect(makeStoreProvider).toHaveBeenCalledWith({
        StateContext: {{pascalCase name}}StateContext,
        DispatchContext: {{pascalCase name}}DispatchContext,
        reducer: {{camelCase name}}Reducer,
        defaultState
      });
    });
  });
});
