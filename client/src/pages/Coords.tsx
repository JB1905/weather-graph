import React from 'react';
import { useQuery } from 'react-apollo';
import { useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import queryString from 'query-string';

import Details from '../containers/Details';

import { COORDS_QUERY } from '../Query';

const Coords: React.FC = () => {
  const location = useLocation();

  const { lat, lon } = queryString.parse(location.search);

  const { loading, error, data } = useQuery(COORDS_QUERY, {
    variables: {
      lat: parseFloat(lat as string),
      lon: parseFloat(lon as string)
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
    <Details data={data.currentForecastByCoords} />
  );
};

export default Coords;
