import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: env(safe-area-inset-top);
  min-height: calc(55px + env(safe-area-inset-top));
  // height: calc(55px + env(safe-area-inset-top));
`;

export default Header;
