import React from "react";
import { renderHook } from "@testing-library/react-hooks";

import { {{camelCase name}} } from "../{{camelCase name}}";

const ONLY_ONCE = 1;

describe("hooks", () => {
  describe("{{camelCase name}}", () => {

    it("should trigger useEffect only once", () => {
      const RENDER_TIMES = 2;

      const { result, rerender } = renderHook(() => {{camelCase name}}());

      for (let i = 0; i < RENDER_TIMES - 1; i++) {
        rerender();
      }

      // expect(mockFunction).toHaveBeenCalledTimes(RENDER_TIMES);
    })

  });
});
