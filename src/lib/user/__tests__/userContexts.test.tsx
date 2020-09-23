import { UserStateContext, UserDispatchContext } from "../userContexts";
import { makeStoreContexts } from "utils/store";
import { defaultState } from "../userState";

jest.mock("utils/store/makeStoreContexts", () => ({
  makeStoreContexts: jest.fn().mockReturnValue(["contextA", "contextB"]),
}));

describe("lib/user", () => {
  describe("contexts", () => {
    describe("UserStateContext", () => {
      it("should create contexts", () => {
        expect(UserStateContext).toBe("contextA");
        expect(UserDispatchContext).toBe("contextB");
        expect(makeStoreContexts).toHaveBeenCalledTimes(1);
        expect(makeStoreContexts).toHaveBeenCalledWith(defaultState);
      });
    });
  });
});
