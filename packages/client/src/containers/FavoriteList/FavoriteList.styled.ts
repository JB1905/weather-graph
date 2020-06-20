import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  flex: 1;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
    max-height: 200px;
  }
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 8px;
  color: ${({ theme }) => theme.colors.text};

  :active {
    opacity: 0.7;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 50%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const ItemSection = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const Pin = styled.button``;
