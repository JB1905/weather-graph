import React, { lazy, Suspense, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { Title } from '../components/Typography';
import ErrorMessage from '../components/ErrorMessage';

import { FORECAST_QUERY } from '../api/query';

import { useUrl } from '../hooks/useUrl';
import { useFavorite } from '../hooks/useFavorite';
import { useBackground } from '../hooks/useBackground';

import CurrentForecastByName from '../interfaces/CurrentForecastByName';

const FeaturedImage = lazy(() => import('../containers/FeaturedImage'));
const Details = lazy(() => import('../containers/Details'));
const UVIndex = lazy(() => import('../containers/UVIndex'));
const Forecast = lazy(() => import('../containers/Forecast'));
const Map = lazy(() => import('../containers/Map'));

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const City: React.FC<RouteComponentProps | any> = ({ match }) => {
  const { toggleFavorite } = useFavorite();

  const { parseUrl } = useUrl();

  const { setBackground } = useBackground();

  const { error, loading, data } = useQuery<{
    currentForecastByName: CurrentForecastByName;
  }>(FORECAST_QUERY, {
    variables: {
      name: parseUrl(match.params.id),
    },
  });

  // useEffect(() => {
  //   setBackground()
  // }, [])

  // console.log(error, loading, data);

  if (loading) return <BeatLoader color="#fff" />;

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { name, id, coord } = data!.currentForecastByName;

  return (
    <Suspense fallback={<BeatLoader color="#fff" />}>
      <PageWrapper>
        {/* <button onClick={() => toggleFavorite(id)}>
          <FontAwesomeIcon icon={faThumbtack} />
        </button> */}

        {/* <FeaturedImage cityName={name} /> */}

        <Title>{name}</Title>

        <Details cityId={id} />

        {/* <UVIndex /> */}

        <Forecast />

        {/* <Map lat={coord.lat} lon={coord.lon} /> */}
      </PageWrapper>
    </Suspense>
  );
};

export default City;
