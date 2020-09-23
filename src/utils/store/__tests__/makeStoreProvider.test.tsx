/* eslint-disable react/display-name */
import React, { useContext, useEffect } from "react";
import enzyme from "enzyme";

import { makeStoreProvider, StoreProviderProp } from "../makeStoreProvider";

type TestStore = {
  element1: string;
  element2: number;
};

type TestAction = {
  type: "TYPE";
  element1: string;
};

describe("utils/store", () => {
  describe("makeStoreProvider", () => {
    const testDefaultStore: TestStore = {
      element1: "test",
      element2: 12,
    };

    let ProviderComponent: React.FC<StoreProviderProp> = () => null;
    let testReducer = jest.fn();
    let TestStoreContext: React.Context<TestStore>;
    let TestDispatchContext: React.Context<React.Dispatch<TestAction>>;

    beforeEach(() => {
      testReducer = jest.fn().mockReturnValue(testDefaultStore);
      TestStoreContext = React.createContext(testDefaultStore);
      TestDispatchContext = React.createContext<React.Dispatch<TestAction>>(
        () => null
      );

      ProviderComponent = makeStoreProvider({
        StateContext: TestStoreContext,
        DispatchContext: TestDispatchContext,
        defaultState: testDefaultStore,
        reducer: testReducer,
      });
    });

    it("should pass in context dispatch method and state object", () => {
      let contextStore = {};

      const TestComponent: React.FC = () => {
        const store = useContext(TestStoreContext);
        const dispatch = useContext(TestDispatchContext);
        useEffect(() => {
          dispatch({ element1: "testDispatch", type: "TYPE" });
          contextStore = store;
        });

        return null;
      };

      enzyme.mount(
        <ProviderComponent>
          <TestComponent />
        </ProviderComponent>
      );

      expect(contextStore).toEqual(testDefaultStore);
      expect(testReducer).toHaveBeenCalledTimes(1);
      expect(testReducer).toHaveBeenCalledWith(
        {
          element1: "test",
          element2: 12,
        },
        { element1: "testDispatch", type: "TYPE" }
      );
    });
  });
});
