import styled from 'styled-components';

export const Wrapper = styled.section`
  width: ${({ theme }) => theme.size.full}; // TODO remove var
  max-width: ${({ theme }) => theme.size.maxContainerSize};
  overflow: hidden;
`;

export const Header = styled.header``;

export const Title = styled.h3`
  font-size: 1.4rem;
`;

export const Content = styled.div``;
