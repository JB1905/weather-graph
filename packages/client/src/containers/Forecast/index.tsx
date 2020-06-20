import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import ItemsCarousel from 'react-items-carousel';

import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';

import { LONG_TERM_FORECAST } from 'api/query';

import { ForecastByName } from 'generated';

import Section from 'components/Section';

import { ForecastList, ItemWrapper } from './Forecast.styled';

interface Props {
  readonly cityId: string;
}

const ForecastItem: React.FC<any> = ({ data }) => {
  // console.log(data);

  const { dt, main } = data;

  const { temp } = main;

  return (
    <ItemWrapper>
      <p>Today</p>
      <p>{temp}</p>
    </ItemWrapper>
  );
};

const Forecast: React.FC<Props> = ({ cityId }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 20;

  const { error, loading, data } = useQuery<ForecastByName>(
    LONG_TERM_FORECAST,
    {
      variables: {
        name: cityId,
      },
    }
  );

  if (loading) return <Loader />;

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { list } = data!.forecastByName;

  // console.log(list);

  return (
    <Section title="Forecast">
      {/* <div style={{ padding: `0 ${chevronWidth}px 20px` }}>
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={8}
          slidesToScroll={8}
          gutter={24}
          leftChevron={<button>{'<'}</button>}
          rightChevron={<button>{'>'}</button>}
          outsideChevron
          chevronWidth={20}
        >
          {list.map((item, index) => (
            <ForecastItem data={item} />
          ))}
        </ItemsCarousel>
      </div> */}
    </Section>
  );
};

export default Forecast;
