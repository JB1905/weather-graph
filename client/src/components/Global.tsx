import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  body {
    min-width: 320px;
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    user-select: none;
    color: #fff;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`;

export default Global;
