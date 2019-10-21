import React from 'react';
import { useQuery } from 'react-apollo';
import { useRouteMatch } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import Details from '../containers/Details';

import { FORECAST_QUERY } from '../Query';

const City: React.FC = () => {
  const match = useRouteMatch();

  const { error, loading, data } = useQuery(FORECAST_QUERY, {
    variables: {
      name: match.params.id
    }
  });

  return error ? (
    error.networkError ? (
      <p>Connection error!</p>
    ) : (
      error.graphQLErrors && <p>{error.graphQLErrors[0].message}!</p>
    )
  ) : loading ? (
    <BeatLoader color="#fff" />
  ) : (
    <Details data={data.currentForecastByName} />
  );
};

export default City;
