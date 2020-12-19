export const routes = {
  home: '/',
  city: (id: string = ':id') => `/city/${id}`,
  coords: '/coords',
};
