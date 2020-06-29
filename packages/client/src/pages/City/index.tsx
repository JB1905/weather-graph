import React, { lazy, Suspense } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import queryString from 'query-string';
import { faStar, faSync } from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazyload';

import ErrorMessage from 'components/ErrorMessage';
import ActionButton from 'components/ActionButton';
import Loader from 'components/Loader';
import Page from 'components/Page';
import { Title } from 'components/Typography';

import { useUrl } from 'hooks/useUrl';
import { useFavorite } from 'hooks/useFavorite';
import { useBackground } from 'hooks/useBackground';

import { FORECAST_QUERY } from 'api/query';

import { CurrentForecast } from 'generated';

import * as S from './City.styles';

import { isFeatureEnabled } from 'features';

import Details from 'containers/Details'
import Forecast from 'containers/Forecast';
import UVIndex from 'containers/UVIndex';
import AirQuality from 'containers/AirQuality';

// const Details = lazy(() => import('containers/Details'));
// const Forecast = lazy(() => import('containers/Forecast'));
// const UVIndex = lazy(() => import('containers/UVIndex'));
// const AirQuality = lazy(() => import('containers/AirQuality'));
// const Maps = lazy(() => import('containers/Maps'));

const City: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  location,
}) => {
  const { toggleFavorite } = useFavorite();

  const { parseUrl } = useUrl();

  const { resetBackground } = useBackground();

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
    if (isFeatureEnabled('backgroundChange')) {
      resetBackground();
    }

    return <Loader />;
  }

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { name, id, coord } = data!.currentForecast;

  return (
    // <Suspense fallback={<Loader />}>
      <Page>
        <S.ActionButtons>
          <ActionButton icon={faStar} onClick={() => toggleFavorite(id)} />
        </S.ActionButtons>

        <S.Content>
          <S.Summary>
            <Title>{name}</Title>

            <div style={{
              width: '100%',
              height: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Details cityId={id} />
            </div>
          </S.Summary>

          <Forecast cityId={name} />

          <UVIndex lat={coord.lat} lon={coord.lon} />

          <AirQuality />

          {/* <Maps lat={coord.lat} lon={coord.lon} /> */}
        </S.Content>
    </Page>
  );
};

export default City;
