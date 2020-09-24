/* eslint-disable react/display-name */
import React, { Suspense } from "react";
import TestRenderer from "react-test-renderer";
import { wait, cleanup } from "@testing-library/react";

import Routes from "../routes";

jest.mock("routes/AuthenticatedRoute", () => ({
  AuthenticatedRoute: ({
    component: Component,
    ...rest
  }: {
    component: React.FunctionComponent;
  }) => (
    <div id="AuthenticatedRoute" {...rest}>
      <Component />
    </div>
  ),
}));

jest.mock("routes/UnauthenticatedRoute", () => ({
  UnauthenticatedRoute: ({
    component: Component,
    ...rest
  }: {
    component: React.FunctionComponent;
  }) => (
    <div id="UnauthenticatedRoute" {...rest}>
      <Component />
    </div>
  ),
}));

jest.mock(
  "pages/errors/NotFoundPage",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="NotFoundPage" {...rest}>
      {children}
    </div>
  )
);

jest.mock(
  "pages/protected/HomePage",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="HomePage" {...rest}>
      {children}
    </div>
  )
);

jest.mock(
  "pages/protected/EmptyPage",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="EmptyPage" {...rest}>
      {children}
    </div>
  )
);

jest.mock(
  "pages/public/LoginPage",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="LoginPage" {...rest}>
      {children}
    </div>
  )
);

jest.mock(
  "layouts/DefaultLayout",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="DefaultLayout" {...rest}>
      {children}
    </div>
  )
);

jest.mock(
  "layouts/PublicLayout",
  () => ({ children, ...rest }: React.PropsWithChildren<{}>) => (
    <div id="PublicLayout" {...rest}>
      {children}
    </div>
  )
);

const waitForLazyImports = async (importsNumber: number) => {
  for (let i = 0; i < importsNumber; i++) {
    await wait();
  }
};

describe("routes", () => {
  beforeEach(cleanup);

  it("should render routes schema", async () => {
    const tree = TestRenderer.create(
      <Suspense fallback={"loading"}>
        <Routes />
      </Suspense>
    );

    await waitForLazyImports(2);

    expect(tree).toMatchSnapshot();
  });
});
