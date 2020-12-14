export const useGeolocation = () => {
  const isGeolocationAvailable = 'geolocation' in navigator;

  const getCoords = (
    currentCoords: (coords: GeolocationCoordinates) => void
  ) => {
    navigator.geolocation.getCurrentPosition((position) => {
      currentCoords(position.coords);
    });
  };

  return { isGeolocationAvailable, getCoords };
};
