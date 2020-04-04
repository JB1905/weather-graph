import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BrandLink = styled(Link)`
  line-height: 0;
  margin-right: 10px;

  svg {
    width: 34px;
    height: 34px;
  }
`;

export default BrandLink;
