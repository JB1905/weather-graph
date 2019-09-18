import styled from 'styled-components';

const Background = styled.figure<{ start: string; stop: string }>`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${({ start, stop }) => `
    background: linear-gradient(155.9deg, ${start} 0%, ${stop} 100%);
  `}
`;

export default Background;
