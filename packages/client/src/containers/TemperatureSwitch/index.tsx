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

      {/* <TemperatureUnitSwitch> */}
      {Object.values(TemperatureUnit).map((unit) => (
        <TemperatureUnitSwitch
          active={unit === temperatureUnit}
          onClick={() => setUnit(unit)}
          key={unit}
        >
          {unit}
        </TemperatureUnitSwitch>
      ))}
      {/* </TemperatureUnitSwitch> */}
    </TemperatureSwitchWrapper>
  );
};

export default TemperatureSwitch;
