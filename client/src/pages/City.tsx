import React, { lazy, Suspense } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { Title } from '../components/Typography';
import ErrorMessage from '../components/ErrorMessage';

import { FORECAST_QUERY } from '../api/query';

import { FavoriteAction } from '../enums/favoriteAction';

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
  const dispatch = useDispatch();

  const favorites = useSelector((state: any) => state.favorite);

  const togglePin = () => {
    dispatch({
      type: favorites.includes(id) ? FavoriteAction.DELETE : FavoriteAction.ADD,
      payload: id,
    });
  };

  const { error, loading, data } = useQuery<{
    currentForecastByName: CurrentForecastByName;
  }>(FORECAST_QUERY, {
    variables: {
      name: match.params.id,
    },
  });

  console.log(error, loading, data);

  if (loading) return <BeatLoader color="#fff" />;

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { name, id, coord } = data!.currentForecastByName;

  return (
    <PageWrapper>
      <button onClick={togglePin}>
        <FontAwesomeIcon icon={faThumbtack} />
      </button>

      <Suspense fallback="Image">
        <FeaturedImage cityName={name} />
      </Suspense>

      <Title>{name}</Title>

      <Suspense fallback="Details">
        <Details cityId={id} />
      </Suspense>

      <Suspense fallback="UV Index">
        <UVIndex />
      </Suspense>

      <Suspense fallback="Forecast">
        <Forecast />
      </Suspense>

      <Suspense fallback="Map">
        <Map lat={coord.lat} lon={coord.lon} />
      </Suspense>
    </PageWrapper>
  );
};

export default City;
