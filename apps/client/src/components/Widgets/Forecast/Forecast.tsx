import { useState } from 'react';
import { useQuery } from '@apollo/client';
import ItemsCarousel from 'react-items-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Widget from 'components/Widget';
import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';
import { LONG_TERM_FORECAST } from 'api/queries';
import { ForecastByName } from 'types/generated';

import * as S from './Forecast.styles';

// const Humidity = () => {}
// const Temperature = () => {}
// const Wind = () => {}

type ForecastProps = {
  readonly cityId: string;
};

const Forecast = ({ cityId }: ForecastProps) => {
  const { error, loading, data } = useQuery<any>(LONG_TERM_FORECAST, {
    variables: {
      name: cityId,
    },
  });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  if (!data) return <p>Not found</p>;

  const { weather, main, wind, sys } = data.currentForecastByIDs[0];

  return (
    <Widget title="Forecast">
      {/* <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={8}
          slidesToScroll={8}
          gutter={24}
          leftChevron={<FontAwesomeIcon icon={faAngleLeft} />}
          rightChevron={<FontAwesomeIcon icon={faAngleRight} />}
          outsideChevron
          chevronWidth={24}
        ></ItemsCarousel> */}
    </Widget>
  );
};

export default Forecast;
