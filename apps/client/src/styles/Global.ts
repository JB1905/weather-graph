import { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    min-width: 320px;
    text-transform: uppercase;
    font-family: ${theme.font.family.body};
    font-size: ${theme.font.size.default};
    color: ${theme.colors.text};

    @media (display-mode: standalone) {
      user-select: none;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

export default Global;
