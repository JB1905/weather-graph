import { useDispatch, useSelector } from 'react-redux';

import { TemperatureUnit } from '../enums/temperatureUnit';

import { SET_TEMPERATURE_UNIT } from '../actions/settingsActions';

export const useUnits = () => {
  const dispatch = useDispatch();

  const unit = useSelector((state: { unit: TemperatureUnit }) => state.unit);

  const setUnit = (unit: TemperatureUnit) => {
    dispatch({
      type: SET_TEMPERATURE_UNIT,
      payload: unit,
    });
  };

  return { unit, setUnit };
};
