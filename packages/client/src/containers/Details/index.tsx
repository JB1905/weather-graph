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

import Loader from 'components/Loader';

import TemperatureSwitch from 'containers/TemperatureSwitch';

import { useBackground } from 'hooks/useBackground';
import { useUnits } from 'hooks/useUnits';

import { formatTime } from 'helpers/formatDate';
import { checkInRange } from 'helpers/checkInRange';

import { FORECAST_BY_IDS } from 'api/query';

import { CurrentForecastByIDs } from 'generated';

import { isFeatureEnabled } from 'features';

import {
  Badge,
  DetailsWrapper,
  Description,
  BadgeWrapper,
  ItemsWrapper,
} from './Details.styled';

interface Props {
  readonly cityId: string;
}

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
  const { setBackground, resetBackground } = useBackground();

  const { convertUnit } = useUnits();

  const { error, loading, data } = useQuery<CurrentForecastByIDs>(
    FORECAST_BY_IDS,
    {
      variables: {
        ids: [cityId],
      },
    }
  );

  if (loading) return <Loader />;

  if (error) return <p>{error.graphQLErrors[0].message}</p>;

  const { weather, main, wind, sys } = data!.currentForecastByIDs[0];

  return (
    <DetailsWrapper>
      <div>
        <TemperatureSwitch temp={main.temp} />

        {isFeatureEnabled('minMaxTemp') && (
          <>
            {convertUnit(main.temp_min)}° / {convertUnit(main.temp_max)}°
          </>
        )}

        <Description>{weather[0].description}</Description>
      </div>

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
