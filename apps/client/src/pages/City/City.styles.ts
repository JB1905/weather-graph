import styled, { css } from 'styled-components';

const fillSize = css`
  flex: 1;
  width: ${({ theme }) => theme.size.full};
`;

export const ManagementActions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: ${({ theme }) => theme.size.full};
  height: 55px; // TODO theme
`;

export const BoardSkeleton = styled.div`
  width: ${({ theme }) => theme.size.full};
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  ${fillSize}
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: ${({ theme }) => theme.size.full};
  flex: 1;
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  margin: 10px 0; //TODO theme
`;
