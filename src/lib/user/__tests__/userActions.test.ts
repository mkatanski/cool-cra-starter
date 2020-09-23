import { setUserData, clearUserData } from "../userActions";

describe("lib/user", () => {
  describe("userActions", () => {
    describe("setUserData", () => {
      it("set user data", () => {
        const action = setUserData("johndoe");
        expect(action).toEqual({
          type: "SET_USER",
          user: {
            isLoggedIn: true,
            username: "johndoe",
          },
        });
      });
    });

    describe("clearUserData", () => {
      it("should reset user data", () => {
        const action = clearUserData();
        expect(action).toEqual({
          type: "SET_USER",
          user: {
            isLoggedIn: false,
            username: "",
          },
        });
      });

      it("should reset user data with realm", () => {
        const action = clearUserData();
        expect(action).toEqual({
          type: "SET_USER",
          user: {
            isLoggedIn: false,
            username: "",
          },
        });
      });
    });
  });
});
