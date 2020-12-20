import { TemperatureUnit } from 'enums/TemperatureUnit';
import { useUnits } from 'hooks/useUnits';
import { memo } from 'react';

import * as S from './TemperatureSwitch.styles';

type TemperatureSwitchProps = {
  readonly temp: number;
};

const TemperatureSwitch = memo<TemperatureSwitchProps>(({ temp }) => {
  const { temperatureUnit, setUnit, convertUnit } = useUnits();

  return (
    <S.Wrapper>
      <S.Value>{convertUnit(temp)}</S.Value>

      <S.Units>
        {Object.values(TemperatureUnit).map((unit) => (
          <S.Unit
            active={unit === temperatureUnit}
            onClick={() => setUnit(unit)}
            key={unit}
          >
            °{unit}
          </S.Unit>
        ))}
      </S.Units>
    </S.Wrapper>
  );
});

export default TemperatureSwitch;
