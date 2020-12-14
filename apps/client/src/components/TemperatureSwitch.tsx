import styled from 'styled-components';

import { TemperatureUnit } from 'enums/TemperatureUnit';
import { useUnits } from 'hooks/useUnits';

// TODO move styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Value = styled.h3`
  font-size: 8rem;
  margin: 0;
`;

const Units = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
`;

const Unit = styled.div<{ readonly active: boolean }>`
  padding: 0.1rem 1rem;
  font-family: inherit;
  font-size: 2.8rem;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.text};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  cursor: pointer;
`;

type TemperatureSwitchProps = {
  readonly temp: number;
};

const TemperatureSwitch = ({ temp }: TemperatureSwitchProps) => {
  const { temperatureUnit, setUnit, convertUnit } = useUnits();

  return (
    <Wrapper>
      <Value>{convertUnit(temp)}</Value>

      <Units>
        {Object.values(TemperatureUnit).map((unit) => (
          <Unit
            active={unit === temperatureUnit}
            onClick={() => setUnit(unit)}
            key={unit}
          >
            °{unit}
          </Unit>
        ))}
      </Units>
    </Wrapper>
  );
};

export default TemperatureSwitch;
