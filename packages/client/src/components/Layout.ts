import styled from 'styled-components';

const Layout = styled.div`
  max-width: 650px;
  margin: 0 auto;
  height: 100vh;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  padding: 0 12px;

  @media (display-mode: standalone) {
    height: 100vh;
  }
`;

export default Layout;
