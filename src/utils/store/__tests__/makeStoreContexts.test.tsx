/* eslint-disable react/display-name */
import React, { useContext, useEffect } from "react";
import enzyme from "enzyme";

import { makeStoreContexts } from "../makeStoreContexts";

type TestStore = {
  element1: string;
  element2: number;
};

describe("utils/store", () => {
  describe("makeStoreProvider", () => {
    const testDefaultStore: TestStore = {
      element1: "test",
      element2: 12,
    };

    it("should create React.Context components", () => {
      const [StateContext, DispatchContext] = makeStoreContexts(
        testDefaultStore
      );

      expect(StateContext.Provider).toBeDefined();
      expect(StateContext.Consumer).toBeDefined();
      expect(DispatchContext.Provider).toBeDefined();
      expect(DispatchContext.Consumer).toBeDefined();
    });

    it("should run default action when there is no context without error", () => {
      const DispatchContext = makeStoreContexts(testDefaultStore)[1];

      const TestComponent: React.FC = () => {
        const dispatch = useContext(DispatchContext);
        useEffect(() => {
          dispatch({
            type: "SET_USER",
            user: { isLoggedIn: false, username: "testDispatchUser" },
          });
        });

        return null;
      };

      let error = null;

      try {
        enzyme.mount(<TestComponent />);
      } catch (e) {
        error = e;
      }

      expect(error).toEqual(null);
    });
  });
});
