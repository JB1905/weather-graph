import styled from 'styled-components';
import { Link } from 'react-router-dom';

import type { Gradient } from 'types/Gradient';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;

    @media (display-mode: standalone) {
      height: 100vh;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: env(safe-area-inset-top);
  padding-left: ${({ theme }) => theme.spaces.content};
  padding-right: ${({ theme }) => theme.spaces.content};
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.size.maxContainerSize};
  min-height: calc(
    ${({ theme }) => theme.size.navbar} + env(safe-area-inset-top)
  );
`;

export const BrandLink = styled(Link)`
  line-height: 0;
  border-radius: ${({ theme }) => theme.size.borderRadius};

  svg {
    width: ${({ theme }) => theme.size.actionButton};
    height: ${({ theme }) => theme.size.actionButton};
  }
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 env(safe-area-inset-bottom);
  overflow: auto;
`;

type BackgroundProps = {
  readonly gradient: Gradient;
};

export const Background = styled.figure<BackgroundProps>`
  margin: 0;
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  /* TODO ease in out */
  ${({ gradient: [start, stop] }) => `
    background: linear-gradient(180deg, ${start} 0%, ${stop} 100%);
  `}
`;
