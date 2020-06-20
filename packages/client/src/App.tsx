import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import Global from 'components/Global';
import ActionButton from 'components/ActionButton';
import Loader from 'components/Loader';

import SearchForm from 'containers/SearchForm';

import { useUrl } from 'hooks/useUrl';
import { useGeolocation } from 'hooks/useGeolocation';
import { useBackground } from 'hooks/useBackground';

import { routes } from 'constants/routes';

import { ReactComponent as Logo } from 'assets/logo.svg';

import { Layout, Header, BrandLink, Main, Background } from 'App.styled';

import { isFeatureEnabled } from 'features';

const Home = lazy(() => import('pages/Home'));
const City = lazy(() => import('pages/City'));

const App: React.FC = () => {
  const history = useHistory();

  const { isGeolocationAvailable, getCoords } = useGeolocation();

  const { backgroundColor } = useBackground();

  const { formatUrl } = useUrl();

  const getLocalForecast = () => {
    getCoords(({ latitude, longitude }) => {
      history.push(`${routes.coords}?lat=${latitude}&lon=${longitude}`);
    });
  };

  return (
    <>
      <Global />

      <Layout>
        <Header>
          <BrandLink to={routes.home} aria-label="Go Home">
            <Logo />
          </BrandLink>

          <SearchForm
            onSubmit={(query) =>
              history.push(`${routes.city}/${formatUrl(query)}`)
            }
          />

          {isFeatureEnabled('currentGeolocation') && (
            <ActionButton
              icon={faLocationArrow}
              onClick={getLocalForecast}
              aria-label="Request Geolocation"
              disabled={!isGeolocationAvailable}
            />
          )}
        </Header>

        <Main>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={routes.home} component={Home} />
              <Route path={`${routes.city}/:id`} component={City} />
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
