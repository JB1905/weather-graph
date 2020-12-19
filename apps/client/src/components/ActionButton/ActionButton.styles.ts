import styled from 'styled-components';

export const Wrapper = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: ${({ theme }) => theme.size.borderRadius};
  min-width: ${({ theme }) => theme.size.actionButton};
  height: ${({ theme }) => theme.size.actionButton};
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: 0;

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
