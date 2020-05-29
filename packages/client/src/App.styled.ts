import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: -webkit-fill-available;

  @media (display-mode: standalone) {
    height: 100vh;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: env(safe-area-inset-top);
  min-height: calc(55px + env(safe-area-inset-top));
  padding-left: 12px;
  padding-right: 12px;
  margin: 0 auto;
  max-width: 650px;
  width: 100%;
`;

export const BrandLink = styled(Link)`
  line-height: 0;
  margin-right: 10px;

  svg {
    width: 34px;
    height: 34px;
  }
`;

export const Main = styled.main`
  /* flex: 1; */
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding-top: 55px; */
`;

export const Background = styled.figure<{ gradient: [string, string] }>`
  margin: 0;
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({ gradient }) => `
    background: linear-gradient(180deg, ${gradient[0]} 0%, ${gradient[1]} 100%);
  `}
`;
