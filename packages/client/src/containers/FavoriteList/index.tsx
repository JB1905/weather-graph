import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Loader from 'components/Loader';
import ActionButton from 'components/ActionButton';

import { useUnits } from 'hooks/useUnits';

import { routes } from 'constants/routes';

import { FORECAST_BY_IDS } from 'api/query';

// import Favorite from 'interfaces/Favorite';

import { CurrentForecastByIDs } from 'generated';

import { List, Item, ItemSection, Wrapper } from './FavoriteList.styles';

interface Props {
  readonly items: string[];
}

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
          <Item key={id} as={Link} to={`${routes.city}/${name}`}>
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

            <ActionButton icon={faStar} onClick={() => null} />
          </Item>
        )
      )}
    </List>
  ) : null;
};

export default FavoriteList;
