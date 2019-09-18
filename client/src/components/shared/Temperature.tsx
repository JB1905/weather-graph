import styled from 'styled-components';

import { sm } from '../../helpers';

const Temperature = styled.h2`
  font-size: 70px;
  padding: 4px 0 0;

  @media (min-width: ${sm}) {
    font-size: 80px;
  }
`;

export default Temperature;
