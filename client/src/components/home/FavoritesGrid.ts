import styled from 'styled-components';

const FavoritesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;

  @media (min-width: 620px) {
    justify-content: flex-start;
  }
`;

export default FavoritesGrid;
