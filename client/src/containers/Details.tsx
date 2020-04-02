import React from 'react';
import { useQuery } from '@apollo/client';
import { BeatLoader } from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompress,
  faTint,
  faArrowUp,
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { formatTime } from '../helpers/formatDate';

import { FORECAST_BY_IDS } from '../api/query';

interface Props {
  cityId: string;
}

const DetailsWrapper = styled.div``;

const Description = styled.h3`
  text-align: center;
  margin: 10px 0;
`;

const BadgeWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  max-width: 500px;
`;

const Badge = styled.li`
  margin: 5px 10px;

  svg {
    margin-left: 8px;
  }
`;

const Item: React.FC<{ icon: any }> = ({ children, icon }) => {
  return (
    <Badge>
      {children}
      <FontAwesomeIcon icon={icon} />
    </Badge>
  );
};

const Details: React.FC<Props> = ({ cityId }) => {
  const { error, loading, data } = useQuery<any>(FORECAST_BY_IDS, {
    variables: {
      ids: [cityId],
    },
  });

  if (loading) return <BeatLoader color="#fff" />;

  if (error) return <p>{error.graphQLErrors[0].message}</p>;

  const { weather, main, wind, sys } = data.currentForecastByIDs[0];

  return (
    <DetailsWrapper>
      <Description>{weather[0].description}</Description>

      {/* <Badge>{main.temp}</Badge> */}
      {/* <Item>{main.temp_min}</Item> */}
      {/* <Badge>{main.temp_max}</Badge> */}

      <BadgeWrapper>
        <Item icon={faCompress}>Pressure: {main.pressure} hPa</Item>

        <Item icon={faArrowUp}>
          Wind: {wind.speed} km/h
          {/* {wind.deg} */}
        </Item>

        <Item icon={faTint}>Humidity: {main.humidity}%</Item>

        <Item icon={faArrowCircleUp}>{formatTime(sys.sunrise * 1000)}</Item>
        <Item icon={faArrowCircleDown}>{formatTime(sys.sunset * 1000)}</Item>
      </BadgeWrapper>
    </DetailsWrapper>
  );
};

export default Details;
