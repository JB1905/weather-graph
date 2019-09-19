import styled from 'styled-components';

const Title = styled.h1<{ sub?: boolean; visible?: boolean }>`
  ${({ sub }) =>
    sub
      ? `
    font-size: 24px;
    margin: 0 14px;
  `
      : `
    font-size: 20px;
  `}

  display: ${({ visible = true }) => (visible ? 'block' : 'none')};
  padding: 16px 0;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default Title;
