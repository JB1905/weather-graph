import React from 'react';
import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

import { ReactComponent as AppLogo } from '../assets/logo.svg';

const HomeLink = styled(Link)`
  line-height: 0;
  margin-right: 10px;
`;

const Logo = styled(AppLogo)`
  width: 34px;
  height: 34px;
`;

const Brand: React.FC<LinkProps | any> = ({ children, ...props }) => {
  return (
    <HomeLink {...props}>
      <Logo />
    </HomeLink>
  );
};

export default Brand;
