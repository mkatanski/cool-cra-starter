import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

/* Uncomment below if needed */
// import { withThemeProvider, withDesktopSize } from 'testsHelpers';
// import { render, getByTestId } from "@testing-library/react";

import { ThemedContainer } from "../ThemedContainer";

/* Uncomment below if You need/want to use enzyme */
// import enzyme from "enzyme";

/* Component mock example */
// jest.mock("[module]", () => ({
//   [ComponentName]: ({children, ...rest}: React.PropsWithChildren<{}>) => (
//     <div id="[ComponentName]" {...rest}>{children}</div>
//   )
// }));

import { StyledTheme } from "styles/_types";

const TestTheme: StyledTheme = {
  container: {
    background: "container.background",
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },

  button: {
    text: {
      default: "palette.holly",
      hover: "palette.outerSpace",
    },
    background: {
      default: "palette.azalea",
      hover: "palette.charm",
    },
  },

  input: {
    background: {
      default: "palette.azalea",
      hover: "palette.azalea",
    },
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },

  table: {
    background: "palette.beautyBush",
    border: "palette.wewak",
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },

  tableHeader: {
    background: "palette.beautyBush",
    border: "palette.wewak",
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },

  tableRowEven: {
    background: "palette.wewak",
    border: "palette.wewak",
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },

  tableRowOdd: {
    background: "palette.beautyBush",
    border: "palette.wewak",
    text: {
      primary: "palette.holly",
      inverse: "palette.beautyBush",
      secondary: "palette.outerSpace",
    },
  },
};

describe("components", () => {
  describe("ThemedContainer", () => {
    it("should render ThemedContainer component", () => {
      const tree = TestRenderer.create(
        <ThemedContainer themes={{ dark: TestTheme, light: TestTheme }}>
          Test
        </ThemedContainer>
      );

      expect(tree).toMatchSnapshot();
    });
  });
});
