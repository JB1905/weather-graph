import { useQuery } from '@apollo/client';
import {
  FontAwesomeIcon,
  // FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {
  faCompress,
  faTint,
  faArrowUp,
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
// import geoTz  from 'geo-tz'

import Widget from 'components/Widget';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import TemperatureSwitch from 'components/TemperatureSwitch';
import { FORECAST_BY_IDS } from 'api/queries';
import { CurrentForecastByIDs } from 'generated';
import { formatTime } from 'helpers/formatDate';

import * as S from './Details.styles';
import { useBackground } from 'hooks/useBackground';
import { useEffect } from 'react';

type DetailsProps = {
  readonly cityId: string;
};

// TODO
const Condition = ({
  icon,
  iconRotate, // TODO rename
  children,
}: any) => {
  return (
    <S.Condition iconRotate={iconRotate}>
      {children}

      <FontAwesomeIcon icon={icon} />
    </S.Condition>
  );
};

const Details = ({ cityId }: DetailsProps) => {
  const { error, loading, data } = useQuery<CurrentForecastByIDs>(
    FORECAST_BY_IDS,
    {
      variables: {
        ids: [cityId],
      },
    }
  );

  const { setBackground } = useBackground();

  // TODO reset on exit
  useEffect(() => {
    if (data?.currentForecastByIDs[0].weather?.[0]?.description) {
      setBackground(
        data?.currentForecastByIDs[0].weather[0].description,
        false
      );
    }
  }, [data, setBackground]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  if (!data) return <p>Not found</p>;

  const { weather, main, wind, sys } = data!.currentForecastByIDs[0];

  // console.log( geoTz(47.650499, -122.350070) )

  return (
    <Widget>
      <S.Wrapper>
        <S.Summary>
          <TemperatureSwitch temp={main.temp} />

          <S.Description>{weather[0].description}</S.Description>
        </S.Summary>

        <S.WeatherConditions>
          <Condition icon={faCompress}>Pressure: {main.pressure} hPa</Condition>

          <Condition icon={faArrowUp} iconRotate={wind.deg}>
            Wind: {wind.speed} km/h
          </Condition>

          <Condition icon={faTint}>Humidity: {main.humidity}%</Condition>

          <S.ConditionsGroup>
            {/* TODO */}
            <Condition icon={faArrowCircleUp}>
              {formatTime(sys.sunrise * 1000)}
            </Condition>
            <Condition icon={faArrowCircleDown}>
              {formatTime(sys.sunset * 1000)}
            </Condition>
          </S.ConditionsGroup>
        </S.WeatherConditions>
      </S.Wrapper>
    </Widget>
  );
};

export default Details;
