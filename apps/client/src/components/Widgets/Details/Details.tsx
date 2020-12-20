import { useQuery } from '@apollo/client';
import {
  faCompress,
  faTint,
  faArrowUp,
  faArrowCircleUp,
  faArrowCircleDown,
} from '@fortawesome/free-solid-svg-icons';
import { memo, useEffect } from 'react';
import geoTz from 'geo-tz';

import Widget from 'components/Widget';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import TemperatureSwitch from 'components/TemperatureSwitch';
import { FORECAST_BY_IDS } from 'api/queries';
import { CurrentForecastByIDs } from 'generated';
import { useBackground } from 'hooks/useBackground';
import { localTime } from 'helpers/localTime';
import { checkInRange } from 'helpers/checkInRange';
import Condition from './Condition';

import * as S from './Details.styles';

type DetailsProps = {
  readonly cityId: string;
};

const Details = memo<DetailsProps>(({ cityId }) => {
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
        // TODO refactor
        checkInRange(
          data?.currentForecastByIDs[0].sys?.sunrise,
          data?.currentForecastByIDs[0].sys?.sunset
        )
      );
    }
  }, [data, setBackground]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  if (!data) return <p>Not found</p>;

  const { weather, main, wind, sys, coord } = data!.currentForecastByIDs[0];

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

          {/* <S.ConditionsGroup> */}
          {/* TODO */}
          <Condition icon={faArrowCircleUp}>
            {localTime(new Date(sys.sunrise * 1000))} (
            {localTime(
              new Date(sys.sunrise * 1000),
              geoTz(coord.lat, coord.lon)
            )}
            )
          </Condition>

          {/* TODO */}
          <Condition icon={faArrowCircleDown}>
            {localTime(new Date(sys.sunset * 1000))} (
            {localTime(
              new Date(sys.sunset * 1000),
              geoTz(coord.lat, coord.lon)
            )}
            )
          </Condition>
          {/* </S.ConditionsGroup> */}
        </S.WeatherConditions>
      </S.Wrapper>
    </Widget>
  );
});

export default Details;
