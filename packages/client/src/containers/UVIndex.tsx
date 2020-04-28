import React from 'react';
import { useQuery } from '@apollo/client';

import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';

import { UV_INDEX } from 'api/query';

import {
  CurrentUVIndexByCoords,
  CurrentUVIndexByCoordsVariables,
} from 'generated';

const UVIndex: React.FC<CurrentUVIndexByCoordsVariables> = ({ lat, lon }) => {
  const { error, loading, data } = useQuery<CurrentUVIndexByCoords>(UV_INDEX, {
    variables: {
      lat,
      lon,
    },
  });

  if (loading) return <Loader />;

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { value } = data!.currentUVIndexByCoords;

  // console.log(data);

  return (
    <>
      <h3>UV Index</h3>

      <p>{value}</p>
    </>
  );
};

export default UVIndex;
