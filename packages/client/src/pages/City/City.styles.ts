import styled, { css } from 'styled-components';

const fillSize = css`
  flex: 1;
  width: ${({ theme }) => theme.size.full};
`;

/* const FlexBox = styled.div<{ direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: center;
  align-items: center;
`; */

export const ManagementActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: ${({ theme }) => theme.size.full};
  height: ${({ theme }) => theme.size.actionButton};
  padding: ${({ theme }) => theme.spaces.content};
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
