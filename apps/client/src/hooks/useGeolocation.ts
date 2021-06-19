import { useEffect, useState } from 'react';

const usePermissions = (name: PermissionName) => {
  const [permission, setPermission] = useState<PermissionStatus>();
  const [permissionError, setPermissionError] = useState();

  // const isPermissionGranted = permission === 'granted'

  const isPermissionGranted = false;

  useEffect(() => {
    if (navigator.permissions) {
      const requestPermissions = async () => {
        try {
          const state = await navigator.permissions.query({ name });

          setPermission(state);
        } catch (err) {}
      };

      requestPermissions();
    } else {
      // setPermissionError('Permission is not supported')
    }
  }, [name]);

  return { permission, permissionError, isPermissionGranted };
};

export const useGeolocation = () => {
  const isGeolocationAvailable = 'geolocation' in navigator;

  const { permission, isPermissionGranted } = usePermissions('geolocation');

  const getCoords = (
    currentCoords: (coords: GeolocationCoordinates) => void
  ) => {
    if (isPermissionGranted) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          currentCoords(position.coords);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  };

  return { isGeolocationAvailable, getCoords };
};
