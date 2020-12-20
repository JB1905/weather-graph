import { memo } from 'react';
import { useQuery } from '@apollo/client';

import Widget from 'components/Widget';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import { UV_INDEX } from 'api/queries';
import {
  CurrentUVIndexByCoords,
  CurrentUVIndexByCoordsVariables,
} from 'generated';

const UVIndex = memo<CurrentUVIndexByCoordsVariables>(({ lat, lon }) => {
  const { error, loading, data } = useQuery<CurrentUVIndexByCoords>(UV_INDEX, {
    variables: { lat, lon },
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  if (!data) return <p>Not found</p>;

  const { value } = data.currentUVIndexByCoords;

  return <Widget title="UV Index">{/* <Chart value={value} /> */}</Widget>;
});

export default UVIndex;
