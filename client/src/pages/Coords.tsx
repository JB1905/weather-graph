import React from 'react';
import { useQuery } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import queryString from 'query-string'
import moment from 'moment';
import days from 'days';
import months from 'months';
import { useDispatch } from 'react-redux';

import Title from '../components/shared/Title';
import Time from '../components/city/Time';
import Temperature from '../components/shared/Temperature';
import Inner from '../components/city/Inner';

import { roundTemperature, toUnit } from '../helpers';

import { COORDS_QUERY } from '../Query';

const Coords: React.FC = ({ location }: any) => {
  const dispatch = useDispatch();
  
  const { lat, lon } = queryString.parse(location.search);

  const { loading, error, data } = useQuery(COORDS_QUERY, {
    variables: {
      lat: parseFloat(lat as string), 
      lon: parseFloat(lon as string), 
    }
  });

  if (loading) {
    return <BeatLoader color={'#fff'} />;
  }

  if (error) {
    return <p>An error occured!</p>;
  }

  const { dt, weather, name, main } = data.currentForecastByCoords;

  const time = moment.unix(dt);

  dispatch({
    type: 'SET_BACKGROUND_COLOR',
    payload: weather[0].description
  });

  return (
    <>
      <Inner left>
        <Title>{name}</Title>

        <Time>
          {days[time.day()]}, {time.date()} {months[time.month()]} {time.year()}
        </Time>
      </Inner>

      <Inner>
        <p>{weather[0].description}</p>

        <Temperature>{roundTemperature(toUnit(main.temp))}</Temperature>

        <p>Pressure: {main.pressure}</p>
        <p>Humidity: {main.humidity}</p>
      </Inner>
    </>
  );
};

export default withRouter(Coords);
