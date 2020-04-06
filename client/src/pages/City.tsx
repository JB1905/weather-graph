import React, { lazy, Suspense } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { Title } from '../components/Typography';
import ErrorMessage from '../components/ErrorMessage';

import { useUrl } from '../hooks/useUrl';
import { useFavorite } from '../hooks/useFavorite';

import { FORECAST_QUERY } from '../api/query';

import CurrentForecastByName from '../interfaces/CurrentForecastByName';

const FeaturedImage = lazy(() => import('../containers/FeaturedImage'));
const Details = lazy(() => import('../containers/Details'));
const UVIndex = lazy(() => import('../containers/UVIndex'));
const Forecast = lazy(() => import('../containers/Forecast'));
const Maps = lazy(() => import('../containers/Maps'));

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const City: React.FC<RouteComponentProps | any> = ({ match }) => {
  const { toggleFavorite } = useFavorite();

  const { parseUrl } = useUrl();

  const { error, loading, data, refetch } = useQuery<{
    currentForecastByName: CurrentForecastByName;
  }>(FORECAST_QUERY, {
    variables: {
      name: parseUrl(match.params.id),
    },
  });

  if (loading) return <BeatLoader color="#fff" />;

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { name, id, coord } = data!.currentForecastByName;

  return (
    <Suspense fallback={<BeatLoader color="#fff" />}>
      <PageWrapper>
        <button onClick={() => toggleFavorite(id)}>
          <FontAwesomeIcon icon={faStar} />
        </button>

        <button onClick={() => refetch()}>
          <FontAwesomeIcon icon={faStar} />
        </button>

        <FeaturedImage cityName={match.params.id} />

        <Title>{name}</Title>

        <Details cityId={id} />

        <UVIndex lat={coord.lat} lon={coord.lon} />

        <Forecast cityId={name} />

        <Maps lat={coord.lat} lon={coord.lon} />
      </PageWrapper>
    </Suspense>
  );
};

export default City;
