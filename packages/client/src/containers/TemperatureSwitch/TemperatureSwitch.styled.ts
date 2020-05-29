import styled from 'styled-components';

export const TemperatureSwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TemperatureValue = styled.h3`
  font-size: 8rem;
  margin: 0;
`;

export const TemperatureSwitch = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TemperatureUnitSwitch = styled.button<{ active?: boolean }>`
  padding: 0.5rem 1rem;
  font-family: inherit;
  font-size: 2.8rem;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
`;
