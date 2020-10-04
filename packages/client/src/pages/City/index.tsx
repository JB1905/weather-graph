import React, { lazy, Suspense } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { faStar, faSync } from '@fortawesome/free-solid-svg-icons';
import { useQuery, gql } from '@apollo/client';
import queryString from 'query-string';

import ErrorMessage from 'components/ErrorMessage';
import ActionButton from 'components/ActionButton';
import Loader from 'components/Loader';
import Page from 'components/Page';
import { Title } from 'components/Typography';

import { useUrl } from 'hooks/useUrl';
import { useFavorite } from 'hooks/useFavorite';

import { CurrentForecast } from 'types/generated';

import {
  ManagementActions,
  BoardSkeleton,
  Content,
  Summary,
} from './City.styles';

const Details = lazy(() => import('components/Widgets/Details'));
const Forecast = lazy(() => import('components/Widgets/Forecast'));

const City = ({
  match,
  location,
}: RouteComponentProps<{ readonly id: string }>) => {
  const { toggleFavorite } = useFavorite();

  const { parseUrl } = useUrl();

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

  const { error, loading, data, refetch } = useQuery<CurrentForecast>(query, {
    variables: prepareParams(),
  });

  if (loading) return <Loader />;

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { name, id } = data!.currentForecast;

  return (
    <Suspense fallback={<Loader />}>
      <Page>
        {/* <ManagementActions>
          <ActionButton icon={faStar} onClick={() => toggleFavorite(id)} />
          <ActionButton icon={faSync} onClick={refetch} />
        </ManagementActions> */}

        <Content>
          <Summary>
            <Title>{name}</Title>

            <BoardSkeleton>
              <Details cityId={id} />
            </BoardSkeleton>
          </Summary>
        </Content>

        {/* <Forecast /> */}
      </Page>
    </Suspense>
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
