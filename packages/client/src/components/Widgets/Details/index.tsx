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

// import TemperatureSwitch from "components/TemperatureSwitch";

import { useBackground } from 'hooks/useBackground';

import { formatTime } from 'helpers/formatDate';
import { checkInRange } from 'helpers/checkInRange';

import { FORECAST_BY_IDS } from 'api/queries';

import { CurrentForecastByIDs } from 'generated';

import {
  Badge,
  DetailsWrapper,
  Description,
  ConditionsInfo,
  ItemsWrapper,
} from './Details.styles';

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

const Details = ({ cityId }: Props) => {
  // const { setBackground, resetBackground } = useBackground();

  const { error, loading, data } = useQuery<CurrentForecastByIDs>(
    FORECAST_BY_IDS,
    {
      variables: {
        ids: [cityId],
      },
    }
  );

  // useEffect(() => {
  //   setBackground(data?.currentForecastByIDs?.[0]?.weather[0]?.description);

  //   return () => resetBackground();
  // }, [data, resetBackground, setBackground]);

  if (loading) return <Loader />;

  if (error) return <p>{error.graphQLErrors[0].message}</p>;

  const { weather, main, wind, sys } = data!.currentForecastByIDs[0];

  return (
    <DetailsWrapper>
      <div>
        {/* <TemperatureSwitch temp={main.temp} /> */}

        <Description>{weather[0].description}</Description>
      </div>

      <ConditionsInfo>
        <Item icon={faCompress}>Pressure: {main.pressure} hPa</Item>

        <Item icon={faArrowUp} iconRotate={wind.deg!}>
          Wind: {wind.speed} km/h
        </Item>

        <Item icon={faTint}>Humidity: {main.humidity}%</Item>

        <ItemsWrapper>
          <Item icon={faArrowCircleUp}>{formatTime(sys.sunrise * 1000)}</Item>
          <Item icon={faArrowCircleDown}>{formatTime(sys.sunset * 1000)}</Item>
        </ItemsWrapper>
      </ConditionsInfo>
    </DetailsWrapper>
  );
};

export default Details;
