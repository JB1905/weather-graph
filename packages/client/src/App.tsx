import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import ActionButton from 'components/ActionButton';
import Loader from 'components/Loader';
import SearchForm from 'components/SearchForm';

import Global from 'styles/Global';

import { useUrl } from 'hooks/useUrl';
import { useGeolocation } from 'hooks/useGeolocation';
import { useBackground } from 'hooks/useBackground';

import { routes } from 'routes';

import { ReactComponent as Logo } from 'assets/logo.svg';

import { Layout, Header, BrandLink, Main, Background } from 'App.styles';

const Home = lazy(() => import('pages/Home'));
const City = lazy(() => import('pages/City'));

const App: React.FC = () => {
  const history = useHistory();

  const { isGeolocationAvailable, getCoords } = useGeolocation();

  const { backgroundColor } = useBackground();

  const { formatUrl } = useUrl();

  const submitForm = (query: string) => {
    history.push(routes.city(formatUrl(query)));
  };

  const getLocalForecast = () => {
    getCoords(({ latitude, longitude }) => {
      history.push(`${routes.coords}?lat=${latitude}&lon=${longitude}`);
    });
  };

  return (
    <>
      <Global />

      <Layout data-testid="app-layout">
        <Header data-testid="app-header">
          <BrandLink to={routes.home} aria-label="Go Home">
            <Logo data-testid="app-logo" />
          </BrandLink>

          <SearchForm onSubmit={submitForm} />

          <ActionButton
            icon={faLocationArrow}
            onClick={getLocalForecast}
            aria-label="Request Geolocation"
            disabled={!isGeolocationAvailable}
          />
        </Header>

        <Main data-testid="app-main">
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route path={routes.city()} component={City} />
              <Route path={routes.coords} component={City} />

              <Redirect from="*" to={routes.home} />
            </Switch>
          </Suspense>
        </Main>
      </Layout>

      <Background gradient={backgroundColor} />
    </>
  );
};

export default App;
