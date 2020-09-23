import { UserState, defaultState } from "./userState";
import { UserAction } from "./userActions";
import { makeStoreContexts } from "utils/store";

const [StateContext, DispatchContext] = makeStoreContexts<
  UserState,
  UserAction
>(defaultState);

export const UserStateContext = StateContext;
export const UserDispatchContext = DispatchContext;
