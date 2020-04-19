import { useDispatch, useSelector } from 'react-redux';
import tuc from 'temp-units-conv';

import { TemperatureUnit } from '../enums/temperatureUnit';

import { SET_TEMPERATURE_UNIT } from '../actions/settingsActions';

import { RootState } from '../reducers';

export const useUnits = () => {
  const dispatch = useDispatch();

  const { temperatureUnit } = useSelector((state: RootState) => state.unit);

  const setUnit = (unit: TemperatureUnit) => {
    dispatch({
      type: SET_TEMPERATURE_UNIT,
      payload: unit,
    });
  };

  const convertUnit = (value: number) => {
    return Math.round(
      temperatureUnit === TemperatureUnit.Celsius
        ? tuc.k2c(value)
        : tuc.k2f(value)
    );
  };

  return { temperatureUnit, setUnit, convertUnit };
};
