import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { map } from 'lodash';
import Auth from './Auth';
import NotFoundError from './NotFoundError';

const CreateRoutes = ({ routes }) => (
  <Switch>
    {map(routes, (route, i) => <AppRoute key={i} {...route} />)}
    <NotFoundError />
  </Switch>
);

const AppRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const RouteComponent = () => (
        <Component {...props}>
          {rest.subRoutes ? <CreateRoutes {...{
            routes: rest.subRoutes,
          }} /> : null}
        </Component>
      );

      return rest.isPublic ? <RouteComponent/> : (
        <Auth>
          <RouteComponent/>
        </Auth>
      );
    }}
  />
);

export default CreateRoutes;
