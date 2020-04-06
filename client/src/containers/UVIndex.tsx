import React from 'react';
import { useQuery } from '@apollo/client';
import { BeatLoader } from 'react-spinners';

import ErrorMessage from '../components/ErrorMessage';

import { UV_INDEX } from '../api/query';

const UVIndex: React.FC<any> = ({ lat, lon }) => {
  const { error, loading, data } = useQuery<any>(UV_INDEX, {
    variables: {
      lat,
      lon,
    },
  });

  if (loading) return <BeatLoader color="#fff" />;

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { value } = data.currentUVIndexByCoords;

  // console.log(data);

  return (
    <>
      <h3>UV Index</h3>

      <p>{value}</p>
    </>
  );
};

export default UVIndex;
