import {
  AddFavoriteAction,
  DeleteFavoriteAction,
  ClearFavoriteAction,
} from '../interfaces/FavoriteState';

export type FavoriteActionTypes =
  | AddFavoriteAction
  | DeleteFavoriteAction
  | ClearFavoriteAction;
