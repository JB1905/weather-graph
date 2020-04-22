import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { BeatLoader } from 'react-spinners';
import { Link } from 'react-router-dom';

import { FORECAST_BY_IDS } from 'api/query';

import { breakpoints } from 'constants/breakpoints';

// import Favorite from 'interfaces/Favorite';

import { CurrentForecastByIDs } from 'generated';

interface Props {
  items: string[];
}

const List = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 8px;
  color: #fff;

  &:active {
    opacity: 0.7;
  }

  @media (min-width: ${breakpoints.sm}) {
    flex-direction: column;
    width: 50%;
  }
`;

const ItemSection = styled.div`
  @media (min-width: ${breakpoints.sm}) {
    width: 100%;
  }
`;

const Pin = styled.button``;

const FavoriteList: React.FC<Props> = ({ items }) => {
  const { error, loading, data } = useQuery<CurrentForecastByIDs>(
    FORECAST_BY_IDS,
    {
      variables: {
        ids: items,
      },
    }
  );

  if (loading) return <BeatLoader color="#fff" />;

  if (error) return <p>{error.graphQLErrors[0].message}</p>;

  return data ? (
    <List>
      {data.currentForecastByIDs.map(
        ({ name, weather, main, id }, index: number) => (
          <Item key={id} as={Link} to={`/city/${name}`}>
            <ItemSection>
              <h3>{name}</h3>
              <p>{weather[0].description}</p>
            </ItemSection>

            <ItemSection>
              <p>{main.temp}</p>
              <p>{main.temp_max}</p>
              <p>{main.temp_min}</p>
            </ItemSection>

            {/* <Pin onClick={null}></Pin> */}
          </Item>
        )
      )}
    </List>
  ) : null;
};

export default FavoriteList;
