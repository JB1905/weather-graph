import { useDispatch, useSelector } from 'react-redux';

import { DELETE_FAVORITE, ADD_FAVORITE } from '../actions/favoriteActions';

export const useFavorite = () => {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state: { favorite: string[] }) => state.favorite
  );

  const toggleFavorite = (id: string) => {
    dispatch({
      type: favorites.includes(id) ? DELETE_FAVORITE : ADD_FAVORITE,
      payload: id,
    });
  };

  return { favorites, toggleFavorite };
};
