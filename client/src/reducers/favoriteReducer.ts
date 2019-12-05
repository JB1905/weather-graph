import { getFavorite, setFavorite } from '../helpers/favorite';

const defaultSettings = {
  items: JSON.parse(getFavorite() as string) || []
};

const favoriteReducer = (state = defaultSettings, action: any) => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const favorite = [...state.items, action.payload];

      setFavorite(JSON.stringify(favorite));

      return { ...state, favorite };
    }

    case 'REMOVE_FAVORITE': {
      return { ...state };
    }

    default:
      return state;
  }
};

export default favoriteReducer;
