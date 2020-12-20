import styled from 'styled-components';

export const Condition = styled.li<{ iconRotate?: number }>`
  margin: 5px 10px;

  svg {
    margin-left: 8px;

    ${({ iconRotate }) =>
      iconRotate ? `transform: rotate(${iconRotate}deg)` : ''}
  }
`;
