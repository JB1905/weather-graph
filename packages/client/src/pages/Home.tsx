import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

import Loader from 'components/Loader';

import { useFavorite } from 'hooks/useFavorite';

const FavoriteList = lazy(() => import('containers/FavoriteList'));

const mixin = `
  display: inline-block;
  margin: 10px 0;
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: 300px;
  margin: 0 auto 25px;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 10rem;
  margin: 0 auto 20px;
`;

const Title = styled.h1`
  font-size: 2.4rem;

  ${mixin}
`;

const SubTitle = styled.h2`
  font-size: 1.6rem;

  ${mixin}
`;

const Home: React.FC<RouteComponentProps> = () => {
  const { favorites } = useFavorite();

  return favorites.length > 0 ? (
    <Suspense fallback={<Loader />}>
      <FavoriteList items={favorites} />
    </Suspense>
  ) : (
    <ContentWrapper>
      <Icon icon={faCloudSunRain} />

      <Title>Weather Graph</Title>

      <SubTitle>Type city name or get wather for current location</SubTitle>
    </ContentWrapper>
  );
};

export default Home;
