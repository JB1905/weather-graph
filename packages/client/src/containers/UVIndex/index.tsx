import React from 'react';
import { useQuery } from '@apollo/client';

import Section from 'components/Section';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';

import { UV_INDEX } from 'api/query';

import {
  CurrentUVIndexByCoords,
  CurrentUVIndexByCoordsVariables,
} from 'generated';

const Chart: React.FC<any> = ({ value }) => {
  return <p>{value}</p>;
};

const UVIndex: React.FC<CurrentUVIndexByCoordsVariables> = ({ lat, lon }) => {
  const { error, loading, data } = useQuery<CurrentUVIndexByCoords>(UV_INDEX, {
    variables: { lat, lon },
  });

  if (loading) return <Loader />;

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { value } = data!.currentUVIndexByCoords;

  return (
    <Section title="UV Index">
      <Chart value={value} />
    </Section>
  );
};

export default UVIndex;
