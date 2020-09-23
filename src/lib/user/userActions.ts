import { UserState } from "./userState";

export type SetUserAction = {
  type: "SET_USER";
  user: UserState;
};

export type UpdateUserAction = {
  type: "UPDATE_USER";
  user: Partial<UserState>;
};

export type UserAction = SetUserAction | UpdateUserAction;

export const clearUserData = (): SetUserAction => ({
  type: "SET_USER",
  user: {
    isLoggedIn: false,
    username: "",
  },
});

export const setUserData = (username: string): SetUserAction => ({
  type: "SET_USER",
  user: {
    isLoggedIn: true,
    username,
  },
});
