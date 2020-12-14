// import { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
// import * as d3 from 'd3';

import Widget from 'components/Widget';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import { UV_INDEX } from 'api/queries';
import {
  CurrentUVIndexByCoords,
  CurrentUVIndexByCoordsVariables,
} from 'generated';

const Chart = ({ value }: any) => {
  return null;
};

const UVIndex = ({ lat, lon }: CurrentUVIndexByCoordsVariables) => {
  const { error, loading, data } = useQuery<CurrentUVIndexByCoords>(UV_INDEX, {
    variables: { lat, lon },
  });

  // if (loading) return <Loader />;

  // if (error) {
  //   return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  // }

  if (loading) return <Loader />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  if (!data) return <p>Not found</p>;

  const { value } = data.currentUVIndexByCoords;

  return (
    <Widget title="UV Index">
      <Chart value={value} />
    </Widget>
  );
};

// export default withWidget({ title: "UV Index" })(UVIndex)
export default UVIndex;
