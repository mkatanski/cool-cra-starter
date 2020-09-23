import { {{pascalCase name}}State, defaultState } from "./{{camelCase name}}State";
import { {{pascalCase name}}Action } from "./{{camelCase name}}Actions";
import { makeStoreContexts } from "utils/store";

const [StateContext, DispatchContext] = makeStoreContexts<
  {{pascalCase name}}State,
  {{pascalCase name}}Action
>(defaultState);

export const {{pascalCase name}}StateContext = StateContext;
export const {{pascalCase name}}DispatchContext = DispatchContext;
