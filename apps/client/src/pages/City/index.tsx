import { lazy } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { faStar, faSync } from '@fortawesome/free-solid-svg-icons';
import { gql, useQuery } from '@apollo/client';
import queryString from 'query-string';
// import geoTz  from 'geo-tz'

import Head from 'components/Head';
import Page from 'components/Page';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import ActionButton from 'components/ActionButton';
import { useBackground } from 'hooks/useBackground';
import { withDynamicImport } from 'hoc/withDynamicImport';
import { CurrentForecast } from 'types/generated';

import * as S from './City.styles';

// TODO
const Details = withDynamicImport(
  lazy(() => import('components/Widgets/Details'))
);
// const Forecast = withDynamicImport(
//   lazy(() => import('components/Widgets/Forecast'))
// );
// const UVIndex = withDynamicImport(
//   lazy(() => import('components/Widgets/UVIndex'))
// );
// const AirQuality = withDynamicImport(
//   lazy(() => import('components/Widgets/AirQuality'))
// );
// const Maps = withDynamicImport(lazy(() => import('components/Widgets/Maps')));

type CityParams = {
  readonly id: string;
};

const City = ({ match, location }: RouteComponentProps<CityParams>) => {
  // TODO
  const x = () => {
    const variables = {} as any;

    if (match.params.id) {
      const name = decodeURIComponent(match.params.id);

      variables.name = name;
    } else {
      const { lat, lon } = queryString.parse(location.search);

      variables.lat = parseFloat(lat as string);
      variables.lon = parseFloat(lon as string);
    }

    return variables;
  };

  const { resetBackground } = useBackground();

  const {
    error,
    loading,
    data,
    // refetch
  } = useQuery<CurrentForecast>(query, {
    // TODO
    variables: x(),
  });

  if (loading) {
    resetBackground();

    return (
      <>
        <Head title="Loading..." />

        <Loader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head title="Oops..." />

        <ErrorMessage>{error.message}</ErrorMessage>
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Head title="Oops..." />

        <p>Not found</p>
      </>
    );
  }

  const {
    name,
    id,
    // coord: { lat, lon },
  } = data.currentForecast;

  // console.log( geoTz(lat, lon) )

  return (
    <>
      <Head title={name} />

      <Page>
        {/* TODO move over apollo query (sync/star always visible/active) */}
        <S.ManagementActions>
          <ActionButton icon={faStar} />
          <ActionButton icon={faSync} />
        </S.ManagementActions>

        <S.Content>
          <S.Summary>
            <S.Title>{name}</S.Title>
          </S.Summary>

          {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 222}}> */}
          <Details cityId={id} />
          {/* </div> */}
        </S.Content>

        {/* <Forecast cityId={id} />

        <UVIndex lat={lat} lon={lon} />

        <AirQuality />

        <Maps lat={lat} lon={lon} /> */}
      </Page>
    </>
  );
};

export const query = gql`
  query CurrentForecast($name: String, $lon: Float, $lat: Float) {
    currentForecast(name: $name, lon: $lon, lat: $lat) {
      id
      name
      coord {
        lat
        lon
      }
    }
  }
`;

export default City;
