import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import Home from './pages/Home';
import City from './pages/City';
import Coords from './pages/Coords';

import Layout from './components/Layout';
import Header from './components/Header';
import Main from './components/Main';
import Background from './components/Background';
import Global from './components/Global';
import Brand from './components/Brand';
import ActionButton from './components/ActionButton';

import SearchForm from './containers/SearchForm';

import { useGeolocation } from './hooks/useGeolocation';

const App: React.FC = () => {
  const history = useHistory();

  const { getCoords } = useGeolocation();

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
          <Brand to="/" />

          <SearchForm onSubmit={(query) => history.push(`/city/${query}`)} />

          <ActionButton icon={faLocationArrow} onClick={getLocalForecast} />
        </Header>

        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/city/:id" component={City} />
            {/* <Route path="/coords" component={Coords} /> */}

            <Redirect from="*" to="/" />
          </Switch>
        </Main>
      </Layout>

      <Background />
    </>
  );
};

export default App;
