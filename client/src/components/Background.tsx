import styled from 'styled-components';

const Background = styled.div<{ from?: string; to?: string }>`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({ from = '#4844eb', to = '#0400ba' }) => `
    background: linear-gradient(155.9deg, ${from} 0%, ${to} 100%);
  `}
`;

export default Background;
