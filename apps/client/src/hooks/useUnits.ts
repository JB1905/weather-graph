import { useDispatch, useSelector } from 'react-redux';
import tuc from 'temp-units-conv';

import { setTemperatureUnit } from 'state/actions';
import type { RootState } from 'state/reducers';

export const useUnits = () => {
  const dispatch = useDispatch();

  const { temperatureUnit } = useSelector((state) => state.unit);

  // useCallback
  const setUnit = (unit: TemperatureUnit) => {
    dispatch(setTemperatureUnit(unit));
  };

  // useCallback
  const convertUnit = (value: number) => {
    const isCelsius = temperatureUnit === TemperatureUnit.Celsius;

    return Math.round(tuc[isCelsius ? 'k2c' : 'k2f'](value));
  };

  return { temperatureUnit, setUnit, convertUnit };
};
