import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  html {
    font-size: 62.5%;
      /* position: fixed;
      overflow: hidden; */
  }

  body {
    margin: 0;
    min-width: 320px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.font.family.body};
    font-size: ${({ theme }) => theme.font.size.default};
    color: ${({ theme }) => theme.colors.text};
      /* position: fixed;
      overflow: hidden; */

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
