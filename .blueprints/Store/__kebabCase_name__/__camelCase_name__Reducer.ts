import { {{pascalCase name}}Action } from "./{{camelCase name}}Actions";
import { {{pascalCase name}}State } from "./{{camelCase name}}State";

export const {{camelCase name}}Reducer = (
  state: {{pascalCase name}}State,
  action: {{pascalCase name}}Action
): {{pascalCase name}}State => {
  switch (action.type) {
    case "DEFAULT":
      return action.payload;
  }
};
