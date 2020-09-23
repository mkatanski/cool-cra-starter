import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { paths } from "config/paths";
import { AuthenticatedRoute } from "routes/AuthenticatedRoute";
import { UnauthenticatedRoute } from "routes/UnauthenticatedRoute";

const NotFoundPage = React.lazy(() => import("pages/errors/NotFoundPage"));
const LoginPage = React.lazy(() => import("pages/public/LoginPage"));
const HomePage = React.lazy(() => import("pages/protected/HomePage"));
const EmptyPage = React.lazy(() => import("pages/protected/EmptyPage"));

const DefaultLayout = React.lazy(() => import("layouts/DefaultLayout"));
const PublicLayout = React.lazy(() => import("layouts/PublicLayout"));

const Routes: React.FC = () => {
  return (
    <Switch>
      <PublicLayout path={[paths.login]}>
        <UnauthenticatedRoute
          path={[paths.login]}
          exact
          component={LoginPage}
          allowAuthenticated
        />
      </PublicLayout>
      <DefaultLayout path="/*">
        <Route
          path="/"
          exact
          render={() => <Redirect to={paths.dashboard} />}
        />
        <AuthenticatedRoute path={paths.dashboard} exact component={HomePage} />
        <AuthenticatedRoute path={paths.empty} exact component={EmptyPage} />
        <AuthenticatedRoute path={paths.empty} exact component={EmptyPage} />
        <AuthenticatedRoute path={paths.empty} exact component={EmptyPage} />
        <AuthenticatedRoute component={NotFoundPage} />
      </DefaultLayout>
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
