export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const CLEAR_FAVORITE = 'CLEAR_FAVORITE';

export const addFavorite = () => ({
  type: ADD_FAVORITE,
});

export const deleteFavorite = () => ({
  type: DELETE_FAVORITE,
});

export const createFavorite = () => ({
  type: CLEAR_FAVORITE,
});
