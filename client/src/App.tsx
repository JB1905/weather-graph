import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationArrow,
  faSearch,
  faMap,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import Home from './pages/Home';
import City from './pages/City';
import Coords from './pages/Coords';
import Maps from './pages/Maps';

import Layout from './components/Layout';
import Global from './components/Global';
import Background from './components/Background';
import Header from './components/shared/Header';
import Search from './components/Search';
import Actions from './components/Actions';
import Button from './components/shared/Button';
import Main from './components/shared/Main';

import { useGeolocation } from './hooks/useGeolocation';
import { useSearch } from './hooks/useSearch';

const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

const ListItem = styled.li`
  margin-right: 30px;

  a {
    color: #fff;
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
    }
  }
`;

const HeaderInner = styled.div`
  display: flex;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
`;

const App: React.FC = () => {
  const gradient = useSelector((state: any) => state.settings.gradient);

  const { getDataByCoords } = useGeolocation();

  const { search, setSearch, isSearch, setIsSearch, submit } = useSearch();

  return (
    <Layout>
      <Header>
        <HeaderInner>
          <List>
            {/* <ListItem>
              <Link to="/">Home</Link>
            </ListItem> */}

            <ListItem>
              <Link to="/maps">
                <FontAwesomeIcon icon={faMap} />
                Maps
              </Link>
            </ListItem>

            <ListItem>
              <Link to="/favorite">
                <FontAwesomeIcon icon={faStar} />
                Favorite
              </Link>
            </ListItem>
          </List>

          <Actions>
            <Search
              // visible={isSearch}
              visible={false}
              type="search"
              placeholder="City name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => submit(e.key)}
            />

            <Button
              onClick={() => setIsSearch(!isSearch)}
              aria-label="Toggle Search"
            >
              <FontAwesomeIcon icon={faSearch} />
            </Button>

            <Button onClick={getDataByCoords} aria-label="Current Location">
              <FontAwesomeIcon icon={faLocationArrow} />
            </Button>
          </Actions>
        </HeaderInner>
      </Header>

      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/city/:id" component={City} />
          <Route exact path="/coords" component={Coords} />
          <Route exact path="/maps" component={Maps} />
          <Redirect from="*" to="/" />
        </Switch>
      </Main>

      <Background gradient={gradient} />

      <Global />
    </Layout>
  );
};

export default App;
