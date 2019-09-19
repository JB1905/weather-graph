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

const City: React.FC = ({ match }: any) => {
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

  const { dt, weather, name, main } = data.currentForecastByName;

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

export default withRouter(City);
