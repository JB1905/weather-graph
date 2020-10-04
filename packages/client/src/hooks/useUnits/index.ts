import { useDispatch, useSelector } from 'react-redux';
import tuc from 'temp-units-conv';

import { TemperatureUnit } from 'enums/TemperatureUnit';

import { setTemperatureUnit } from 'state/actions';

import { RootState } from 'state/reducers';

export const useUnits = () => {
  const dispatch = useDispatch();

  const { temperatureUnit } = useSelector((state: RootState) => state.unit);

  const setUnit = (unit: TemperatureUnit) => {
    dispatch(setTemperatureUnit(unit));
  };

  const convertUnit = (value: number) => {
    return Math.round(
      tuc[temperatureUnit === TemperatureUnit.Celsius ? 'k2c' : 'k2f'](value)
    );
  };

  return { temperatureUnit, setUnit, convertUnit };
};
