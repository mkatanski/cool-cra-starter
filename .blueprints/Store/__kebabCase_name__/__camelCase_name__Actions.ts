export type DefaultAction = {
  type: "DEFAULT";
  payload: {};
};

export type {{pascalCase name}}Action = DefaultAction;

// export const exampleActionCreator = (): DefaultAction => ({
//   type: "DEFAULT",
//   payload: {
//     key: 'value'
//   }
// });
