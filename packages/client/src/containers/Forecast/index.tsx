import React from 'react';
import { useQuery } from '@apollo/client';

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
  console.log(data);

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
      <ForecastList>
        {list.map((item, index) => (
          <ForecastItem data={item} />
        ))}
      </ForecastList>
    </Section>
  );
};

export default Forecast;
