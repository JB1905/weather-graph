import { useDispatch, useSelector } from "react-redux";

import { DELETE_FAVORITE, ADD_FAVORITE } from "actions/favoriteActions";

import { RootState } from "reducers";

export const useFavorite = () => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.favorite.items);

  const toggleFavorite = (id: string) => {
    // TODO
    // dispatch({
    //   type: items.includes(id) ? DELETE_FAVORITE : ADD_FAVORITE,
    //   payload: id,
    // });
  };

  return { favorites: items, toggleFavorite };
};
