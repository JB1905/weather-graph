import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.h3`
  font-size: 8rem;
  margin: 0;
`;

export const Units = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
`;

type UnitParams = {
  readonly active: boolean;
};

export const Unit = styled.div<UnitParams>`
  padding: 0.1rem 1rem;
  font-family: inherit;
  font-size: 2.8rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  cursor: pointer;
  border: 0;
`;
