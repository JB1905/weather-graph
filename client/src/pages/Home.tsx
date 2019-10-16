import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

const Icon = styled(FontAwesomeIcon)`
  font-size: 100px;
  margin-bottom: 36px;
`;

const Message = styled.p`
  max-width: 280px;
  text-align: center;
  line-height: 1.6;
`;

const Home: React.FC = () => {
  const dispatch = useDispatch();

  dispatch({
    type: 'SET_BACKGROUND_COLOR',
    payload: null
  });

  return (
    <>
      <Icon icon={faCloudSun} />

      <Message>Type city name or get wather for current location</Message>
    </>
  );
};

export default Home;
