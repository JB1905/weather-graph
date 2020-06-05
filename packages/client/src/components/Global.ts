import { createGlobalStyle } from 'styled-components';

import { theme } from 'constants/theme';

const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    min-width: 320px;
    user-select: none;
    text-transform: uppercase;
    font-family: ${theme.font.family.body};
    font-size: ${theme.font.size.default};
    color: ${theme.colors.text};
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
