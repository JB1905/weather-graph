import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import queryString from 'query-string';
import { BeatLoader } from 'react-spinners';

import { COORDS_QUERY } from '../api/query';

const Coords: React.FC<RouteComponentProps> = ({ location }) => {
  const { lat, lon } = queryString.parse(location.search);

  const { error, loading, data } = useQuery<{
    forecastByCoords: any;
  }>(COORDS_QUERY, {
    variables: {
      lon: parseFloat(lon as string),
      lat: parseFloat(lat as string),
    },
  });

  // console.log({ error, loading, data });

  if (loading) return <BeatLoader color="#fff" />;

  if (error) return <p>{error.graphQLErrors[0].message}</p>;

  return <>{data!.forecastByCoords.city.name}</>;
};

export default Coords;
