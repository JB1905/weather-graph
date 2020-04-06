import React, { useEffect } from 'react';
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

import { useUnits } from '../hooks/useUnits';
import { useBackground } from '../hooks/useBackground';

import { formatTime } from '../helpers/formatDate';

import { FORECAST_BY_IDS } from '../api/query';

import { TemperatureUnit } from '../enums/temperatureUnit';

interface Props {
  cityId: string;
}

const DetailsWrapper = styled.section``;

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

const Badge = styled.li<{ iconRotate?: number }>`
  margin: 5px 10px;

  svg {
    margin-left: 8px;

    ${({ iconRotate }) =>
      iconRotate ? `transform: rotate(${iconRotate})` : ''}
  }
`;

const Item: React.FC<{ icon: any; iconRotate?: number }> = ({
  iconRotate,
  children,
  icon,
}) => {
  return (
    <Badge iconRotate={iconRotate}>
      {children}

      <FontAwesomeIcon icon={icon} />
    </Badge>
  );
};

const Details: React.FC<Props> = ({ cityId }) => {
  const { setBackground } = useBackground();

  const { temperatureUnit, setUnit, convertUnit } = useUnits();

  const { error, loading, data } = useQuery<any>(FORECAST_BY_IDS, {
    variables: {
      ids: [cityId],
    },
  });

  useEffect(() => {
    if (data) {
      setBackground(data.currentForecastByIDs[0].weather[0].description, false);
    }

    // return () => setBackground('', false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (loading) return <BeatLoader color="#fff" />;

  if (error) return <p>{error.graphQLErrors[0].message}</p>;

  const { weather, main, wind, sys } = data.currentForecastByIDs[0];

  return (
    <DetailsWrapper>
      <Badge>
        {convertUnit(main.temp)}

        <button onClick={() => setUnit(TemperatureUnit.CELSIUS)}>C</button>
        <button onClick={() => setUnit(TemperatureUnit.FAHRENHEIT)}>F</button>
      </Badge>

      <Description>{weather[0].description}</Description>

      <BadgeWrapper>
        <Item icon={faCompress}>Pressure: {main.pressure} hPa</Item>

        <Item icon={faArrowUp} iconRotate={wind.deg}>
          Wind: {wind.speed} km/h
        </Item>

        <Item icon={faTint}>Humidity: {main.humidity}%</Item>

        <div>
          <Item icon={faArrowCircleUp}>{formatTime(sys.sunrise * 1000)}</Item>
          <Item icon={faArrowCircleDown}>{formatTime(sys.sunset * 1000)}</Item>
        </div>
      </BadgeWrapper>
    </DetailsWrapper>
  );
};

export default Details;
