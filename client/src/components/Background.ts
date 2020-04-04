import styled from 'styled-components';

const Background = styled.figure<{ gradient: [string, string] }>`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({ gradient }) => `
    background: linear-gradient(160deg, ${gradient[0]} 0%, ${gradient[1]} 100%);
  `}
`;

export default Background;
