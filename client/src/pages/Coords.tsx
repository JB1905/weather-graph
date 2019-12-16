import React from 'react';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import queryString from 'query-string';

import Details from '../containers/Details';
import Forecast from '../containers/Forecast';
// import Image from "../containers/Image";
import Maps from '../containers/Maps';

import { COORDS_QUERY } from '../Query';

const Coords: React.FC = () => {
  const location = useLocation();

  const { lat, lon } = queryString.parse(location.search);

  const { loading, error, data, refetch } = useQuery(COORDS_QUERY, {
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
    <>
      <button onClick={() => refetch()}>Refresh</button>
      {/* <Image src={data.cityByName.photos[0].image.web} /> */}
      <Details data={data.currentForecastByCoords} />
      <h3>Daily</h3>
      <button onClick={() => null}>Summary</button>
      <button onClick={() => null}>Details</button>
      <Forecast data={data.forecastByCoords} />
      <h3>Hourly</h3>
      <h3>Day Details</h3>
      <Maps />
    </>
  );
};

export default Coords;
