import React, { lazy, Suspense } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import queryString from 'query-string';
// import { faStar, faSync } from '@fortawesome/free-solid-svg-icons';

import ErrorMessage from 'components/ErrorMessage';
// import ActionButton from 'components/ActionButton';
import Loader from 'components/Loader';
import { Title } from 'components/Typography';

import { useUrl } from 'hooks/useUrl';
import { useFavorite } from 'hooks/useFavorite';
import { useBackground } from 'hooks/useBackground';

import { FORECAST_QUERY } from 'api/query';

import { CurrentForecast } from 'generated';

import { PageWrapper, Summary } from './City.styled';

const Details = lazy(() => import('containers/Details'));
const Forecast = lazy(() => import('containers/Forecast'));
const UVIndex = lazy(() => import('containers/UVIndex'));
const AirQuality = lazy(() => import('containers/AirQuality'));
// const Maps = lazy(() => import('containers/Maps'));

const City: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  location,
}) => {
  // const { toggleFavorite } = useFavorite();
  // const { addHistory } = useHistory();

  const { parseUrl } = useUrl();

  // const { resetBackground } = useBackground();

  const prepareParams = () => {
    const variables = {} as any;

    if (match.params.id) {
      const name = parseUrl(match.params.id);

      variables.name = name;
    } else {
      const { lat, lon } = queryString.parse(location.search);

      variables.lat = parseFloat(lat as string);
      variables.lon = parseFloat(lon as string);
    }

    return variables;
  };

  const { error, loading, data, refetch } = useQuery<CurrentForecast>(
    FORECAST_QUERY,
    {
      variables: prepareParams(),
    }
  );

  if (loading) {
    // resetBackground();

    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { name, id, coord } = data!.currentForecast;

  return (
    <Suspense fallback={<Loader />}>
      <PageWrapper>
        <Summary>
          <Title>{name}</Title>

          <Details cityId={id} />
        </Summary>

        <Forecast cityId={name} />

        <UVIndex lat={coord.lat} lon={coord.lon} />

        <AirQuality />

        {/* <Maps lat={coord.lat} lon={coord.lon} /> */}
      </PageWrapper>
    </Suspense>
  );
};

export default City;
