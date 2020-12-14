import { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { withDynamicImport } from 'hoc/withDynamicImport';
import { routes } from 'routes';

const Home = withDynamicImport(lazy(() => import('pages/Home')));
const City = withDynamicImport(lazy(() => import('pages/City')));

const Router = () => {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route path={[routes.city(), routes.coords]} component={City} />

      <Redirect from="*" to={routes.home} />
    </Switch>
  );
};

export default Router;
