import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

import * as S from './Home.styles';

const Home = () => {
  // TODO clear react helmet title

  return (
    <S.ContentWrapper>
      <S.Icon icon={faCloudSunRain} />

      <S.Title>Weather Graph</S.Title>

      <S.SubTitle>
        Type city name or get weather for current location
      </S.SubTitle>
    </S.ContentWrapper>
  );
};

export default Home;
