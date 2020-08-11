import styled from 'styled-components';

export const DetailsWrapper = styled.section`
  /* height: 100%; */
  /* min-height: 300px; */
  /* max-height: 600px; */
  /* display: flex; */
`;

export const ItemsWrapper = styled.div`
  display: flex;
`;

export const Description = styled.h4`
  text-align: center;
  margin: 20px 0;
`;

export const ConditionsInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0 auto;
  max-width: 500px;
  padding: 0;
`;

export const Badge = styled.li<{ iconRotate?: number }>`
  margin: 5px 10px;

  svg {
    margin-left: 8px;

    ${({ iconRotate }) =>
      iconRotate ? `transform: rotate(${iconRotate}deg)` : ''}
  }
`;
