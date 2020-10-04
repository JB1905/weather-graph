import React, { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import * as d3 from 'd3';

import Section from 'components/Section';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';

import { UV_INDEX } from 'api/queries';

import {
  CurrentUVIndexByCoords,
  CurrentUVIndexByCoordsVariables,
} from 'generated';

const Chart = ({ value }: any) => {
  const ref = useRef(null);

  useEffect(() => {}, []);

  return <svg ref={ref} />;
};

const UVIndex = ({ lat, lon }: CurrentUVIndexByCoordsVariables) => {
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
