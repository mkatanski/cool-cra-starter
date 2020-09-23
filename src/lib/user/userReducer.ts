import { UserAction } from "./userActions";
import { UserState } from "./userState";

export const userReducer = (
  state: UserState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case "SET_USER":
      return action.user;
    case "UPDATE_USER":
      return {
        ...state,
        ...action.user,
      };
  }
};
