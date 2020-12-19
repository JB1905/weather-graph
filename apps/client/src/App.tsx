import { useHistory } from 'react-router-dom';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import ActionButton from 'components/ActionButton';
import SearchForm from 'components/SearchForm';
import Router from 'components/Router';
import Global from 'styles/Global';
import { useGeolocation } from 'hooks/useGeolocation';
import { useBackground } from 'hooks/useBackground';
import { routes } from 'routes';

import { ReactComponent as Logo } from 'assets/logo.svg';

import * as S from 'App.styles';

const App = () => {
  const history = useHistory();

  const { isGeolocationAvailable, getCoords } = useGeolocation();

  const { backgroundColor } = useBackground();

  const submitSearch = (query: string) => {
    history.replace(routes.city(encodeURIComponent(query)));
  };

  const getLocalForecast = () => {
    getCoords(({ latitude, longitude }) => {
      history.replace(`${routes.coords}?lat=${latitude}&lon=${longitude}`);
    });
  };

  return (
    <>
      <Global />

      <S.Layout>
        <S.Header>
          <S.BrandLink to={routes.home} replace aria-label="Go Home">
            <Logo />
          </S.BrandLink>

          <SearchForm onSubmit={submitSearch} />

          <ActionButton
            icon={faLocationArrow}
            onClick={getLocalForecast}
            aria-label="Request Geolocation"
            disabled={!isGeolocationAvailable}
          />
        </S.Header>

        <S.Main>
          <Router />
        </S.Main>
      </S.Layout>

      <S.Background gradient={backgroundColor} />
    </>
  );
};

export default App;
