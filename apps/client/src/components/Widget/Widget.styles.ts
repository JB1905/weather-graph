import styled from 'styled-components';

export const Wrapper = styled.section`
  width: ${({ theme }) => theme.size.full}; // TODO remove var
  max-width: ${({ theme }) => theme.size.maxContainerSize};
  overflow: hidden;
`;

export const Header = styled.header`
  /* padding: 14px 20px; */
`;

export const Title = styled.h3`
  font-size: 1.4rem;
`;

export const Content = styled.div`
  /* border-radius: 20px; */
  /* background: #fff3; */
  /* padding: 20px; */

  /* display: flex;
  align-items: center;
  justify-content:center;
  min-height: 200px; */
`;
