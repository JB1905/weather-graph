import { useHistory } from 'react-router-dom';

export const useGeolocation = () => {
  const history = useHistory();

  const getDataByCoords = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;

        history.push(`/coords?lat=${latitude}&lon=${longitude}`);
      });
    }
  };

  return { getDataByCoords };
};
