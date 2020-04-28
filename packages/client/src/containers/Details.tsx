import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {
  faCompress,
  faTint,
  faArrowUp,
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import Loader from 'components/Loader';

import { useUnits } from 'hooks/useUnits';
import { useBackground } from 'hooks/useBackground';

import { formatTime } from 'helpers/formatDate';
import { checkInRange } from 'helpers/checkInRange';

import { FORECAST_BY_IDS } from 'api/query';

import { TemperatureUnit } from 'enums/temperatureUnit';

import { CurrentForecastByIDs } from 'generated';
import { theme } from 'constants/theme';

interface Props {
  cityId: string;
}

const DetailsWrapper = styled.section``;

const ItemsWrapper = styled.div`
  display: flex;
`;

const Description = styled.h3`
  text-align: center;
  margin: 20px 0;
`;

const BadgeWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  max-width: 500px;
  padding: 0;
  margin-top: 10px;
`;

const Temperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TemperatureValue = styled.h3`
  font-size: 8rem;
  margin: 0;
`;

const TemperatureSwitch = styled.div`
  display: flex;
  flex-direction: column;
`;

const TemperatureUnitSwitch = styled.button`
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 2.8rem;
  background: transparent;
  border: 0;
  color: ${theme.colors.text};
`;

const Badge = styled.li<{ iconRotate?: number }>`
  margin: 5px 10px;

  svg {
    margin-left: 8px;

    ${({ iconRotate }) =>
      iconRotate ? `transform: rotate(${iconRotate})` : ''}
  }
`;

const Item: React.FC<{
  icon: FontAwesomeIconProps['icon'];
  iconRotate?: number;
}> = ({ iconRotate, children, icon }) => {
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

  const { error, loading, data } = useQuery<CurrentForecastByIDs>(
    FORECAST_BY_IDS,
    {
      variables: {
        ids: [cityId],
      },
    }
  );

  // useEffect(() => {
  // if (data) {
  //   setBackground(
  //     data.currentForecastByIDs[0].weather[0].description,
  //     !checkInRange(
  //       data.currentForecastByIDs[0].sys.sunrise,
  //       data.currentForecastByIDs[0].sys.sunset
  //     )
  //   );
  // }
  // return () => setBackground('', false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  if (loading) return <Loader />;

  if (error) return <p>{error.graphQLErrors[0].message}</p>;

  const { weather, main, wind, sys } = data!.currentForecastByIDs[0];

  return (
    <DetailsWrapper>
      <Temperature>
        <TemperatureValue>{convertUnit(main.temp)}</TemperatureValue>

        <TemperatureSwitch>
          <TemperatureUnitSwitch
            onClick={() => setUnit(TemperatureUnit.Celsius)}
          >
            C
          </TemperatureUnitSwitch>

          <TemperatureUnitSwitch
            onClick={() => setUnit(TemperatureUnit.Fahrenheit)}
          >
            F
          </TemperatureUnitSwitch>
        </TemperatureSwitch>
      </Temperature>

      <Description>{weather[0].description}</Description>

      <BadgeWrapper>
        <Item icon={faCompress}>Pressure: {main.pressure} hPa</Item>

        <Item icon={faArrowUp} iconRotate={wind.deg!}>
          Wind: {wind.speed} km/h
        </Item>

        <Item icon={faTint}>Humidity: {main.humidity}%</Item>

        <ItemsWrapper>
          <Item icon={faArrowCircleUp}>{formatTime(sys.sunrise * 1000)}</Item>
          <Item icon={faArrowCircleDown}>{formatTime(sys.sunset * 1000)}</Item>
        </ItemsWrapper>
      </BadgeWrapper>
    </DetailsWrapper>
  );
};

export default Details;
