import { {{camelCase name}}Reducer } from "../{{camelCase name}}Reducer";
import { defaultState } from "../{{camelCase name}}State";

describe("lib/{{camelCase name}}", () => {
  describe("reducer", () => {
    describe("DEFAULT", () => {
      it("should set state", () => {
        const reducer = {{camelCase name}}Reducer(defaultState, {
          type: "DEFAULT",
          payload: {}
        });

        expect(reducer).toEqual({});
      });
    });
  });
});
