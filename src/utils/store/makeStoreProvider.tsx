import React, { useReducer, Dispatch } from "react";

export type StoreProviderProp = {
  children: React.ReactNode;
};

export type StoreConfig<StateContextType, DispatchContextType> = {
  /** React.Context with store's state */
  StateContext: React.Context<StateContextType>;
  /** React.Context with store's dispatching method */
  DispatchContext: React.Context<Dispatch<DispatchContextType>>;
  /** Store's reducer */
  reducer: (
    state: StateContextType,
    action: DispatchContextType
  ) => StateContextType;
  /** Initial state for store */
  defaultState: StateContextType;
};

/**
 * Returns React component containing providers for store's state and dispatch methods
 * According to React official documentation, creating two separate providers is recommended
 * way to work with hooks based reducer.
 *
 * @param config
 *
 */
export const makeStoreProvider = <
  T extends StoreProviderProp,
  StateContextType = {},
  DispatchContextType = {}
>({
  StateContext,
  DispatchContext,
  reducer,
  defaultState,
}: StoreConfig<StateContextType, DispatchContextType>): React.FC<T> => ({
  children,
}: T) => {
  const [currentState, dispatch] = useReducer(reducer, defaultState);

  return (
    <StateContext.Provider value={currentState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
