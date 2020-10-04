import React, { lazy, Suspense } from 'react';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

import Loader from 'components/Loader';

import { useFavorite } from 'hooks/useFavorite';

import { ContentWrapper, Icon, Title, SubTitle } from './Home.styles';

import { isFeatureEnabled } from 'features';

// TODO withSuspense
const FavoriteList = lazy(() => import('components/FavoriteList'));

const Home = () => {
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
