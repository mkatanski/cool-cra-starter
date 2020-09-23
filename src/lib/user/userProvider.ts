import { UserStateContext, UserDispatchContext } from "./userContexts";
import { userReducer } from "./userReducer";
import { makeStoreProvider } from "utils/store";
import { defaultState } from "./userState";

export const UserProvider = makeStoreProvider({
  StateContext: UserStateContext,
  DispatchContext: UserDispatchContext,
  reducer: userReducer,
  defaultState,
});
