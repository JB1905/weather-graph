import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import Loader from 'components/Loader';

import { FORECAST_BY_IDS } from 'api/query';

import { theme } from 'constants/theme';

// import Favorite from 'interfaces/Favorite';

import { CurrentForecastByIDs } from 'generated';
import { useUnits } from 'hooks/useUnits';

interface Props {
  items: string[];
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  flex: 1;

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: row;
    // flex-wrap: wrap;
    max-height: 200px;
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 8px;
  color: ${theme.colors.text};

  &:active {
    opacity: 0.7;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    width: 50%;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const ItemSection = styled.div`
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const Pin = styled.button``;

const FavoriteList: React.FC<Props> = ({ items }) => {
  const { convertUnit } = useUnits();

  const { error, loading, data } = useQuery<CurrentForecastByIDs>(
    FORECAST_BY_IDS,
    {
      variables: {
        ids: items,
      },
    }
  );

  if (loading) return <Loader />;

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
              <p>{convertUnit(main.temp)}</p>

              <Wrapper>
                <p>{convertUnit(main.temp_max)}</p>
                <p>{convertUnit(main.temp_min)}</p>
              </Wrapper>
            </ItemSection>

            {/* <Pin onClick={null}></Pin> */}
          </Item>
        )
      )}
    </List>
  ) : null;
};

export default FavoriteList;
