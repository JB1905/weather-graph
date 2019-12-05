import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 0;
  height: 100px;
  width: 100%;

  @supports (padding-top: env(safe-area-inset-top)) {
    padding-top: calc(env(safe-area-inset-top) + 20px);
  }
`;

export default Header;
