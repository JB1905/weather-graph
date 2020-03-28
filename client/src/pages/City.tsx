import React from 'react';
import { useQuery } from '@apollo/client';
import { useRouteMatch } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

import Details from '../containers/Details';

import { FORECAST_QUERY } from '../api/query';

const parseError = (message: string) => {
  switch (message) {
    case 'Response not successful: Received status code 400':
      return 'Bad request!';

    case 'NetworkError when attempting to fetch resource.':
      return 'Connection error!';

    default:
      return message;
  }
};

const City: React.FC = () => {
  const match = useRouteMatch() as any;

  const { error, loading, data } = useQuery(FORECAST_QUERY, {
    variables: {
      name: match.params.id,
    },
  });

  return error ? (
    error.networkError ? (
      <p>{parseError(error.networkError.message)}</p>
    ) : (
      error.graphQLErrors && <p>{error.graphQLErrors[0].message}!</p>
    )
  ) : loading ? (
    <BeatLoader color="#fff" />
  ) : (
    <>
      <Details data={data.currentForecastByName} />
    </>
  );
};

export default City;
