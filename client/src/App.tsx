import React, { useState } from 'react';
import { useHistory, Switch, Route, Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faSearch } from '@fortawesome/free-solid-svg-icons';

import Home from './pages/Home';
import City from './pages/City';
import Coords from './pages/Coords';

import Layout from './components/Layout';
import Global from './components/Global';
import Background from './components/Background';
import Header from './components/shared/Header';
import Title from './components/shared/Title';
import Search from './components/Search';
import Actions from './components/Actions';
import Button from './components/shared/Button';
import Main from './components/shared/Main';

const App: React.FC = () => {
  const history = useHistory();

  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');

  const gradient = useSelector((state: any) => state.settings.gradient);

  const getDataByCoords = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        history.push(`/coords?lat=${latitude}&lon=${longitude}`);
      });
    }
  };

  const submit = (key: string) => {
    if (key === 'Enter') {
      history.push(`/city/${search}`);
    }
  };

  return (
    <Layout>
      <Header>
        <Title visible={!isSearch}>
          <Link to="/">Weather Graph</Link>
        </Title>

        <Search
          visible={isSearch}
          type="search"
          placeholder="City name"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={e => submit(e.key)}
        />

        <Actions>
          <Button onClick={getDataByCoords} aria-label="Current Location">
            <FontAwesomeIcon icon={faLocationArrow} />
          </Button>

          <Button onClick={() => setIsSearch(!isSearch)} aria-label="Toggle Search">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </Actions>
      </Header>

      <Global />

      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/city/:id" component={City} />
          <Route exact path="/coords" component={Coords} />
          <Redirect from="*" to="/" />
        </Switch>
      </Main>

      <Background gradient={gradient} />
    </Layout>
  );
};

export default App;
