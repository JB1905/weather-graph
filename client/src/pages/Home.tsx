import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { BeatLoader } from 'react-spinners';

import { HOME_PAGE_QUERY } from '../api/query';

import FavoritesGrid from '../components/home/FavoritesGrid';
import Favorite from '../components/home/Favorite';
import Title from '../components/shared/Title';

const Icon = styled(FontAwesomeIcon)`
  font-size: 10rem;
  margin-bottom: 36px;
`;

const Message = styled.p`
  max-width: 280px;
  text-align: center;
  line-height: 1.6;
`;

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const favorite = useSelector((state: any) => state.favorite.items);

  const { loading, error, data } = useQuery<any>(HOME_PAGE_QUERY, {
    variables: {
      ids: favorite,
    },
  });

  dispatch({
    type: 'SET_BACKGROUND_COLOR',
    payload: null,
  });

  if (loading) return <BeatLoader color="#fff" />;

  if (error) {
    if (error.networkError) {
      return <p>Connection error!</p>;
    } else {
      return <p>{error.graphQLErrors[0].message}!</p>;
    }
  }

  return data.currentForecastByIDs.length > 0 ? (
    <FavoritesGrid>
      {data.currentForecastByIDs.map((forecast: any) => (
        <Favorite data={forecast} />
      ))}
    </FavoritesGrid>
  ) : (
    <>
      <Icon icon={faCloudSun} />

      <Title visible>Weather Graph</Title>

      <Message>Type city name or get wather for current location</Message>
    </>
  );
};

export default Home;
