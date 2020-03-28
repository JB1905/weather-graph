import styled from 'styled-components';

const Title = styled.h1<{ sub?: boolean; visible?: boolean }>`
  ${({ sub }) =>
    sub
      ? `
    font-size: 2.4rem;
    margin: 0 14px;
  `
      : `
    font-size: 2.4rem;
  `}

  text-align: center;
  display: ${({ visible = true }) => (visible ? 'block' : 'none')};
  padding: 16px 0;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default Title;
