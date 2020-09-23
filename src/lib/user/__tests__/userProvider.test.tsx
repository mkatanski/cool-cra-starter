/* eslint-disable react/display-name */
import { UserProvider } from "../userProvider";
import { makeStoreProvider } from "utils/store";
import { UserStateContext, UserDispatchContext } from "../userContexts";
import { userReducer } from "../userReducer";
import { defaultState } from "../userState";

jest.mock("utils/store/makeStoreProvider", () => ({
  makeStoreProvider: jest.fn(),
}));

describe("lib/user", () => {
  describe("userProvider", () => {
    // UserProvider has to be assigned,
    // otherwise it may not be created and test will fail
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let Provider;

    beforeAll(() => {
      Provider = UserProvider;
    });

    it("should create user provider component", () => {
      expect(makeStoreProvider).toBeCalledTimes(1);
      expect(makeStoreProvider).toHaveBeenCalledWith({
        StateContext: UserStateContext,
        DispatchContext: UserDispatchContext,
        reducer: userReducer,
        defaultState,
      });
    });
  });
});
