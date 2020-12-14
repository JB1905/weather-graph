import { lazy } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import queryString from 'query-string';
import { Helmet } from 'react-helmet';
// import geoTz  from 'geo-tz'

import Page from 'components/Page';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

import { withDynamicImport } from 'hoc/withDynamicImport';

import { CurrentForecast } from 'types/generated';

import * as S from './City.styles';

const Details = withDynamicImport(
  lazy(() => import('components/Widgets/Details'))
);
const Forecast = lazy(() => import('components/Widgets/Forecast'));
const UVIndex = lazy(() => import('components/Widgets/UVIndex'));
const AirQuality = lazy(() => import('components/Widgets/AirQuality'));
const Maps = lazy(() => import('components/Widgets/Maps'));

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

  const { error, loading, data, refetch } = useQuery<CurrentForecast>(query, {
    // TODO
    variables: x(),
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  if (!data) return <p>Not found</p>;

  const {
    name,
    id,
    coord: { lat, lon },
  } = data.currentForecast;

  // console.log( geoTz(lat, lon) )

  return (
    <>
      {/* TODO */}
      <Helmet titleTemplate="%s | Weather Graph">
        <title>{name}</title>
      </Helmet>

      <Page>
        <S.ManagementActions>
          {/* <ActionButton /> */}
          {/* <ActionButton /> */}
        </S.ManagementActions>

        <S.Content>
          <S.Summary>
            <S.Title>{name}</S.Title>
          </S.Summary>

          {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 222}}> */}
          <Details cityId={id} />
          {/* </div> */}
        </S.Content>

        {/* <Details cityId={id} /> */}

        {/* <Forecast cityId={id} /> */}

        {/*
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
