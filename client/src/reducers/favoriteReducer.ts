import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  CLEAR_FAVORITE,
} from '../actions/favoriteActions';

const initialState: string[] = [];

const favoriteReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }

      return state;
    }

    case DELETE_FAVORITE: {
      return state.filter((favorite: string) => favorite !== action.payload);
    }

    case CLEAR_FAVORITE: {
      return initialState;
    }

    default:
      return state;
  }
};

export default favoriteReducer;
