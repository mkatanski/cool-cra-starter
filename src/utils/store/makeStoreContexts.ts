import React from "react";

/**
 * Returns tuple with React.Contexts for given store.
 *
 * @param defaultState default store state
 */
export const makeStoreContexts = <State, Action>(
  defaultState: State
): [React.Context<State>, React.Context<React.Dispatch<Action>>] => [
  React.createContext<State>(defaultState),
  React.createContext<React.Dispatch<Action>>(() => null),
];
