import React from "react";
import { {{pascalCase name}}View, {{pascalCase name}}ViewProps } from "./{{pascalCase name}}.view";

// We use omit to filter out properties of components view
// which we don't want to expose
// See: https://www.typescriptlang.org/docs/handbook/utility-types.html#omittk
// for usage example
export type {{pascalCase name}}Props = Omit<{{pascalCase name}}ViewProps, ""> & {};

export const {{pascalCase name}}: React.FC<{{pascalCase name}}Props> = ({
  children
}: {{pascalCase name}}Props) => {
  // place here hooks and other logic

  return <{{pascalCase name}}View data-testid="{{pascalCase name}}View">{children}</{{pascalCase name}}View>;
};
