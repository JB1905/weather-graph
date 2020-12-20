import { lazy } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { gql, NetworkStatus, useQuery } from '@apollo/client';
import queryString from 'query-string';

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

type CityParams = {
  readonly id: string;
};

const POLL_INTERVAL = 1000 * 60 * 10; // 10 minutes

const City = ({ match, location }: RouteComponentProps<CityParams>) => {
  // TODO
  const prepareVariables = () => {
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
    refetch,
    networkStatus,
  } = useQuery<CurrentForecast>(query, {
    // TODO
    variables: prepareVariables(),
    notifyOnNetworkStatusChange: true,
    pollInterval: POLL_INTERVAL,
  });

  if (loading && networkStatus !== NetworkStatus.refetch) {
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

  const { name, id } = data.currentForecast;

  return (
    <>
      <Head title={name} />

      <Page>
        {/* TODO move over apollo query (sync/star always visible/active) */}
        <S.ManagementActions>
          <ActionButton
            icon={faSync}
            onClick={() => refetch()}
            animate={networkStatus === NetworkStatus.refetch}
          />
        </S.ManagementActions>

        <S.Content>
          <S.Summary>
            <S.Title>{name}</S.Title>
          </S.Summary>

          <Details cityId={id} />
        </S.Content>
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
