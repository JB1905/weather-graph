import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  dispatch({
    type: 'SET_BACKGROUND_COLOR',
    payload: null
  });

  return (
    <>
      <FontAwesomeIcon
        icon={faCloudSun}
        style={{ fontSize: 100, marginBottom: 36 }}
      />

      <p style={{ maxWidth: 280, textAlign: 'center', lineHeight: 1.6 }}>
        Type city name or get wather for current location
      </p>
    </>
  );
};

export default Home;
