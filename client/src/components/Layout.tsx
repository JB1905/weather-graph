import React from 'react';
import styled from 'styled-components';
import { useViewport } from 'react-viewport-hooks';

import { Children } from '../types/Children';

import { sm } from '../helpers';

const Layout = styled.div<{ size: string }>`
  max-width: 650px;
  margin: 0 auto;
  min-height: 100vh;
  min-height: ${({ size }) => size};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${sm}) {
    padding: 0 20px;
  }
`;

export default ({ children }: { children: Children }) => {
  const { vh } = useViewport();

  const matches = window.matchMedia('(display-mode: standalone)').matches;

  return <Layout size={matches ? '100vh' : `${vh}px`}>{children}</Layout>;
};
