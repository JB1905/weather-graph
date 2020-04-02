import React from 'react';
import styled from 'styled-components';
import { useViewport } from 'react-viewport-hooks';

const LayoutWrapper = styled.div<{ size: string }>`
  max-width: 650px;
  margin: 0 auto;
  height: 100vh;
  height: ${({ size }) => size};
  display: flex;
  flex-direction: column;
  // justify-content: center;
  padding: 0 12px;
`;

const Layout: React.FC = ({ children }) => {
  const { vh } = useViewport();

  const { matches } = window.matchMedia('(display-mode: standalone)');

  return (
    <LayoutWrapper size={matches ? '100vh' : `${vh}px`}>
      {children}
    </LayoutWrapper>
  );
};

export default Layout;
