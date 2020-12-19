import { ADD_FAVORITE, DELETE_FAVORITE, CLEAR_FAVORITE } from 'state/actions';

export interface FavoriteState {
  readonly items: string[];
}

export interface AddFavoriteAction {
  readonly type: typeof ADD_FAVORITE;
  readonly payload: string;
}

export interface DeleteFavoriteAction {
  readonly type: typeof DELETE_FAVORITE;
  readonly payload: string;
}

export interface ClearFavoriteAction {
  readonly type: typeof CLEAR_FAVORITE;
}
