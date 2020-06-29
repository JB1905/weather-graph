import React from 'react';

import { useUnits } from 'hooks/useUnits';

import { TemperatureUnit } from 'enums/TemperatureUnit';

import {
  TemperatureSwitchWrapper,
  TemperatureValue,
  TemperatureUnitSwitch,
} from './TemperatureSwitch.styles';

const TemperatureSwitch: React.FC<any> = ({ temp }) => {
  const { temperatureUnit, setUnit, convertUnit } = useUnits();

  return (
    <TemperatureSwitchWrapper>
      <TemperatureValue>{convertUnit(temp)}</TemperatureValue>

      {/* <TemperatureSwitch>
        {Object.values(TemperatureUnit).map((unit) => (
          <TemperatureUnitSwitch
            onClick={() => setUnit(unit)}
            active={unit === temperatureUnit}
          >
            {unit}
          </TemperatureUnitSwitch>
        ))}
      </TemperatureSwitch> */}
    </TemperatureSwitchWrapper>
  );
};

export default TemperatureSwitch;
