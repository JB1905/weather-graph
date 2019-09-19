import React from 'react';
import { useQuery } from 'react-apollo';
import { withRouter } from 'react-router';
import { BeatLoader } from 'react-spinners';
import moment from 'moment';
import days from 'days';
import months from 'months';

import Title from '../components/shared/Title';
import Time from '../components/city/Time';
import Temperature from '../components/shared/Temperature';
import Inner from '../components/city/Inner';

import { roundTemperature, toUnit } from '../helpers';

import { COORDS_QUERY } from '../Query';

const Coords: React.FC = ({ location }: any) => {
  const { loading, error, data } = useQuery(COORDS_QUERY, {
    variables: {
      lat: parseFloat(location.search.split(',')[0].replace('?', '')),
      lon: parseFloat(location.search.split(',')[1])
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
