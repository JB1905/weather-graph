import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  /* min-height: 200px; */
  max-width: ${({ theme }) => theme.size.maxContainerSize};
  overflow: hidden;
  /* display:flex;
  align-items: center;
  justify-content:center; */
`;

export const Header = styled.header``;

export const Title = styled.h3`
  font-size: 1.4rem;
`;

export const Content = styled.div``;
