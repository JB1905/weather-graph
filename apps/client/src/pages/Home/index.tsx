import { useEffect } from 'react';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

import Head from 'components/Head';
import { useBackground } from 'hooks/useBackground';

import * as S from './Home.styles';

const Home = () => {
  // TODO
  const { resetBackground } = useBackground();

  useEffect(() => {
    resetBackground();
  }, [resetBackground]);

  return (
    <>
      <Head />

      <S.ContentWrapper>
        <S.Icon icon={faCloudSunRain} />

        <S.Title>Weather Graph</S.Title>

        <S.SubTitle>
          Type city name or get weather for current location
        </S.SubTitle>
      </S.ContentWrapper>
    </>
  );
};

export default Home;
