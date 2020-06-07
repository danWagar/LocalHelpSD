import React from 'react';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom';
import TokenService from '../../services/token-service';

interface iPrivateRoute extends RouteProps {
  component: React.ComponentType<RouteProps>;
  id?: string;
}

const PrivateRoute: React.FC<iPrivateRoute> = ({ component: Component, ...props }) => {
  console.log(Component);
  return (
    <Route
      {...props}
      render={(componentProps: RouteComponentProps) =>
        TokenService.hasAuthToken() ? (
          <Component {...componentProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: componentProps.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
