import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  min-height: 60px;
  width: 100%;

  // background-color: #4844eb;

  padding-top: env(safe-area-inset-top);
`;

export default Header;
