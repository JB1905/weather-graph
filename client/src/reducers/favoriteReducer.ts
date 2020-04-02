import { FavoriteAction } from '../enums/favoriteAction';

const initialState: string[] = [];

const favoriteReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FavoriteAction.ADD: {
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }

      return state;
    }

    case FavoriteAction.DELETE: {
      return state.filter((favorite: string) => favorite !== action.payload);
    }

    case FavoriteAction.CLEAR: {
      return initialState;
    }

    default:
      return state;
  }
};

export default favoriteReducer;
