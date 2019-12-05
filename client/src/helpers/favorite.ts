export const setFavorite = (favorite: string) => {
  window.localStorage.setItem('favorite', favorite);
};

export const getFavorite = () => window.localStorage.getItem('favorite');
