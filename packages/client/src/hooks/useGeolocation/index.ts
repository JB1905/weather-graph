export const useGeolocation = () => {
  const isGeolocationAvailable = 'geolocation' in navigator;

  const getCoords = (currentCoords: (coords: Coordinates) => void) => {
    navigator.geolocation.getCurrentPosition((position) => {
      currentCoords(position.coords);
    });
  };

  return { isGeolocationAvailable, getCoords };
};
