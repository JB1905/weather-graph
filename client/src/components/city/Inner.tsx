import styled from 'styled-components';

import { sm } from '../../helpers';

const Inner = styled.div<{ left?: boolean }>`
  display: flex;
  align-items: ${({ left }) => (left ? 'center' : 'flex-end')};
  flex-direction: column;
  margin: 10px 0;

  p {
    line-height: 2;
    font-size: 12px;

    @media (min-width: ${sm}) {
      font-size: 18px;
    }
  }
`;

export default Inner;
