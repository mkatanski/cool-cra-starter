import { userReducer } from "../userReducer";
import { defaultState } from "../userState";

describe("lib/user", () => {
  describe("reducer", () => {
    describe("SET_USER", () => {
      it("should set state", () => {
        const reducer = userReducer(defaultState, {
          type: "SET_USER",
          user: { isLoggedIn: true, username: "user001" },
        });

        expect(reducer).toEqual({
          isLoggedIn: true,
          username: "user001",
        });
      });
    });

    describe("UPDATE_USER", () => {
      it("should get default state", () => {
        expect(
          userReducer(defaultState, { type: "UPDATE_USER", user: {} })
        ).toEqual({
          isLoggedIn: false,
          username: "",
        });
      });

      it("should update", () => {
        const reducer = userReducer(
          {
            ...defaultState,
            isLoggedIn: true,
            username: "oldUser",
          },
          {
            type: "UPDATE_USER",
            user: { username: "user002" },
          }
        );

        expect(reducer).toEqual({
          isLoggedIn: true,
          username: "user002",
        });
      });
    });
  });
});
