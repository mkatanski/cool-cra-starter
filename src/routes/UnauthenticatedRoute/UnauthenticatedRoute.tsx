import React, { useContext, ComponentType } from "react";
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

import { UserStateContext } from "lib/user";
import { paths } from "config/paths";

export interface UnauthenticatedRouteProps extends RouteProps {
  component: ComponentType<RouteComponentProps>;
  allowAuthenticated?: boolean;
}

/** Route available only if user is unauthenticated */
export const UnauthenticatedRoute: React.FC<UnauthenticatedRouteProps> = ({
  component: Component,
  allowAuthenticated,
  ...rest
}: UnauthenticatedRouteProps) => {
  const { isLoggedIn } = useContext(UserStateContext);

  return isLoggedIn && !allowAuthenticated ? (
    <Redirect to={paths.dashboard} push />
  ) : (
    <Route {...rest} render={(matchProps) => <Component {...matchProps} />} />
  );
};
