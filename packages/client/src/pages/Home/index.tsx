import React, { lazy, Suspense } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

import Loader from 'components/Loader';

import { useFavorite } from 'hooks/useFavorite';

import { ContentWrapper, Icon, Title, SubTitle } from './Home.styles';

import { isFeatureEnabled } from 'features';

const FavoriteList = lazy(() => import('containers/FavoriteList'));

const Home: React.FC<RouteComponentProps> = () => {
  const { favorites } = useFavorite();

  return (
    <ContentWrapper>
      {favorites.length > 0 && isFeatureEnabled('favorites') ? (
        <Suspense fallback={<Loader />}>
          <FavoriteList items={favorites} />
        </Suspense>
      ) : (
        <>
          <Icon icon={faCloudSunRain} />

          <Title>Weather Graph</Title>

          <SubTitle>Type city name or get wather for current location</SubTitle>
        </>
      )}
    </ContentWrapper>
  );
};

export default Home;
