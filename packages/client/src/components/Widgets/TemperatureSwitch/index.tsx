import React from 'react';

import { useUnits } from 'hooks/useUnits';

import { TemperatureUnit } from 'enums/TemperatureUnit';

import {
  TemperatureSwitchWrapper,
  TemperatureValue,
  TemperatureSwitchUnits,
  TemperatureSwitchUnitsItem,
} from './TemperatureSwitch.styles';

const TemperatureSwitch = ({ temp }: any) => {
  const { temperatureUnit, setUnit, convertUnit } = useUnits();

  return (
    <TemperatureSwitchWrapper>
      <TemperatureValue>{convertUnit(temp)}</TemperatureValue>

      <TemperatureSwitchUnits>
        {/* {Object.values(TemperatureUnit).map((unit) => (
          <TemperatureSwitchUnitsItem
            active={unit === temperatureUnit}
            onClick={() => setUnit(unit)}
            key={unit}
          >
            °{unit}
          </TemperatureSwitchUnitsItem>
        ))} */}
      </TemperatureSwitchUnits>
    </TemperatureSwitchWrapper>
  );
};

export default TemperatureSwitch;
