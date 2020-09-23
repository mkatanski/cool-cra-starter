import React, { useContext, ComponentType } from "react";
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import { UserStateContext } from "lib/user";
import { paths } from "config/paths";

export interface AuthenticatedRouteProps extends RouteProps {
  component: ComponentType<RouteComponentProps>;
}

/** Route available only if user is authenticated */
export const AuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  component: Component,
  ...rest
}: AuthenticatedRouteProps) => {
  const { isLoggedIn } = useContext(UserStateContext);

  return isLoggedIn ? (
    <Route {...rest} render={(matchProps) => <Component {...matchProps} />} />
  ) : (
    <Redirect to={paths.login} push />
  );
};
