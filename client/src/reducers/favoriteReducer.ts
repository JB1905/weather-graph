import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  CLEAR_FAVORITE,
} from '../actions/favoriteActions';

import { FavoriteState } from '../interfaces/FavoriteState';

import { FavoriteActionTypes } from '../types/FavoriteActionTypes';

const initialState: FavoriteState = {
  items: [],
};

const favoriteReducer = (state = initialState, action: FavoriteActionTypes) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      if (!state.items.includes(action.payload)) {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }

      return state;
    }

    case DELETE_FAVORITE:
      return {
        ...state,
        items: state.items.filter((favorite) => favorite !== action.payload),
      };

    case CLEAR_FAVORITE:
      return initialState;

    default:
      return state;
  }
};

export default favoriteReducer;
