import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { BeatLoader } from 'react-spinners';

import ErrorMessage from '../components/ErrorMessage';

import { LONG_TERM_FORECAST } from '../api/query';
import { ForecastByName } from '../generated';

interface Props {
  cityId: string;
}

const ForecastWrapper = styled.section`
  flex: 1;
`;

const Forecast: React.FC<Props> = ({ cityId }) => {
  const { error, loading, data } = useQuery<ForecastByName>(
    LONG_TERM_FORECAST,
    {
      variables: {
        name: cityId,
      },
    }
  );

  if (loading) return <BeatLoader color="#fff" />;

  if (error) {
    return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  }

  const { list } = data!.forecastByName;

  // console.log(data);

  return (
    <ForecastWrapper>
      <h3>Forecast</h3>

      {list.map((item, index) => (
        <p key={index}>{item.main.temp}</p>
      ))}
    </ForecastWrapper>
  );
};

export default Forecast;
