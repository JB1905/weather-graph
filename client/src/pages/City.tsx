import React from 'react';
import { useQuery } from 'react-apollo';
import { withRouter } from 'react-router';
import { BeatLoader } from 'react-spinners';
import moment from 'moment';
import days from 'days';
import months from 'months';
import { useDispatch } from 'react-redux';

import Title from '../components/shared/Title';
import Time from '../components/city/Time';
import Temperature from '../components/shared/Temperature';
import Inner from '../components/city/Inner';

import { roundTemperature, toUnit } from '../helpers';

import { FORECAST_QUERY } from '../Query';

const City = ({ match }: any) => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(FORECAST_QUERY, {
    variables: {
      name: match.params.id
    }
  });

  if (loading) {
    return <BeatLoader color={'#fff'} />;
  }

  if (error) {
    return <p>An error occured!</p>;
  }

  const { list, city } = data.hourlyForecastByName;

  const now = list[0];

  const time = moment.unix(now.dt);

  dispatch({
    type: 'SET_BACKGROUND_COLOR',
    payload: now.weather[0].description
  });

  return (
    <>
      <Inner left>
        <Title>{city.name}</Title>

        <Time>
          {days[time.day()]}, {time.date()} {months[time.month()]} {time.year()}
        </Time>
      </Inner>

      <Inner>
        <p>{now.weather[0].description}</p>

        <Temperature>{roundTemperature(toUnit(now.main.temp))}</Temperature>

        <p>Pressure: {now.main.pressure}</p>
        <p>Humidity: {now.main.humidity}</p>
      </Inner>
    </>
  );
};

export default withRouter(City);
