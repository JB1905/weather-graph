import React, { lazy, Suspense } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { faStar, faSync } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { Title } from 'components/Typography';
import ErrorMessage from 'components/ErrorMessage';
import ActionButton from 'components/ActionButton';
import Loader from 'components/Loader';

import { useUrl } from 'hooks/useUrl';
import { useFavorite } from 'hooks/useFavorite';

import { FORECAST_QUERY } from 'api/query';

import { CurrentForecastByName } from 'generated';

const FeaturedImage = lazy(() => import('containers/FeaturedImage'));
const Details = lazy(() => import('containers/Details'));
const UVIndex = lazy(() => import('containers/UVIndex'));
const Forecast = lazy(() => import('containers/Forecast'));
const Maps = lazy(() => import('containers/Maps'));

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const City: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { toggleFavorite } = useFavorite();

  const { parseUrl } = useUrl();

  const { error, loading, data, refetch } = useQuery<CurrentForecastByName>(
    FORECAST_QUERY,
    {
      variables: {
        name: parseUrl(match.params.id),
      },
    }
  );

  if (loading) return <Loader />;

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { name, id, coord } = data!.currentForecastByName;

  return (
    <Suspense fallback={<Loader />}>
      <PageWrapper>
        <Wrapper>
          <ActionButton icon={faStar} onClick={() => toggleFavorite(id)} />
          <ActionButton icon={faSync} onClick={() => refetch()} />
        </Wrapper>

        {/* <FeaturedImage cityName={match.params.id} /> */}

        <Title>{name}</Title>

        <Details cityId={id} />

        {/* <UVIndex lat={coord.lat} lon={coord.lon} />

        <Forecast cityId={name} />

        <Maps lat={coord.lat} lon={coord.lon} /> */}
      </PageWrapper>
    </Suspense>
  );
};

export default City;
