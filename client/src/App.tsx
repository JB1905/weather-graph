import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { BeatLoader } from 'react-spinners';

import Layout from './components/Layout';
import Header from './components/Header';
import Main from './components/Main';
import Background from './components/Background';
import Global from './components/Global';
import BrandLink from './components/BrandLink';
import ActionButton from './components/ActionButton';

import SearchForm from './containers/SearchForm';

import { useUrl } from './hooks/useUrl';
import { useGeolocation } from './hooks/useGeolocation';
import { useBackground } from './hooks/useBackground';

import { ReactComponent as Logo } from './assets/logo.svg';

const Home = lazy(() => import('./pages/Home'));
const City = lazy(() => import('./pages/City'));

const App: React.FC = () => {
  const history = useHistory();

  const { getCoords } = useGeolocation();

  const { backgroundColor } = useBackground();

  const { formatUrl } = useUrl();

  const getLocalForecast = () => {
    getCoords(({ latitude, longitude }) => {
      history.push(`/coords?lat=${latitude}&lon=${longitude}`);
    });
  };

  return (
    <>
      <Global />

      <Layout>
        <Header>
          <BrandLink to="/" aria-label="Go Home">
            <Logo />
          </BrandLink>

          <SearchForm
            onSubmit={(query) => history.push(`/city/${formatUrl(query)}`)}
          />

          <ActionButton
            icon={faLocationArrow}
            onClick={getLocalForecast}
            aria-label="Request Geolocation"
          />
        </Header>

        <Main>
          <Suspense fallback={<BeatLoader color="#fff" />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/city/:id" component={City} />
              <Route path="/coords" component={City} />

              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </Main>
      </Layout>

      <Background gradient={backgroundColor} />
    </>
  );
};

export default App;
