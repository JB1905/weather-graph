import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';
import { FORECAST_BY_IDS } from 'api/queries';
import { useUnits } from 'hooks/useUnits';
import { CurrentForecastByIDs } from 'types/generated';

import * as S from './FavoriteList.styles';

// TODO update name
// const FavoritesListItem = () => {

//   // return ()
// }

type FavoriteListProps = {
  readonly items: string[];
};

const FavoritesList = ({ items }: FavoriteListProps) => {
  const { convertUnit } = useUnits();

  const { error, loading, data } = useQuery<CurrentForecastByIDs>(
    FORECAST_BY_IDS,
    {
      variables: {
        ids: items,
      },
    }
  );

  // if (loading) return <Loader />;

  // if (error) {
  //   return <ErrorMessage>{error.graphQLErrors[0].message}</ErrorMessage>;
  // }

  if (loading) return <Loader />;
  if (error) return <ErrorMessage>{error.message}</ErrorMessage>;
  if (!data) return <p>Not found</p>;

  return <div></div>;
};

export default FavoritesList;
