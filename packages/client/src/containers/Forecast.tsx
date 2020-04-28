import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import ErrorMessage from 'components/ErrorMessage';
import Loader from 'components/Loader';

import { LONG_TERM_FORECAST } from 'api/query';

import { ForecastByName } from 'generated';

interface Props {
  cityId: string;
}

const ForecastWrapper = styled.section`
  flex: 1;
`;

const ForecastList = styled.ul`
  display: flex;
  overflow: auto;
  max-width: 200px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// const ItemIcon = styled(FontAwesomeIcon)``

const ForecastItem: React.FC = () => {
  return (
    <ItemWrapper>
      <p>Today</p>
      <p>11/22</p>
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

  // console.log(data);

  return (
    <ForecastWrapper>
      <h3>Forecast</h3>
      {/* <p key={index}>{item.main.temp}</p> */}

      <ForecastList>
        {list.map((item, index) => (
          <ForecastItem />
        ))}
      </ForecastList>
    </ForecastWrapper>
  );
};

export default Forecast;
