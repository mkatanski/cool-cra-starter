import { {{pascalCase name}}StateContext, {{pascalCase name}}DispatchContext } from "./{{camelCase name}}Contexts";
import { {{camelCase name}}Reducer } from "./{{camelCase name}}Reducer";
import { makeStoreProvider } from "utils/store";
import { defaultState } from "./{{camelCase name}}State";

export const {{pascalCase name}}Provider = makeStoreProvider({
  StateContext: {{pascalCase name}}StateContext,
  DispatchContext: {{pascalCase name}}DispatchContext,
  reducer: {{camelCase name}}Reducer,
  defaultState
});
