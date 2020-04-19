import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  CLEAR_FAVORITE,
} from '../actions/favoriteActions';

export interface FavoriteState {
  items: string[];
}

export interface AddFavoriteAction {
  type: typeof ADD_FAVORITE;
  payload: string;
}

export interface DeleteFavoriteAction {
  type: typeof DELETE_FAVORITE;
  payload: string;
}

export interface ClearFavoriteAction {
  type: typeof CLEAR_FAVORITE;
}
