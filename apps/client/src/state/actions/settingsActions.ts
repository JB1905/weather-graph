import { TemperatureUnit } from 'enums/TemperatureUnit';

export const SET_TEMPERATURE_UNIT = 'SET_TEMPERATURE_UNIT';

export const setTemperatureUnit = (payload: TemperatureUnit) => ({
  type: SET_TEMPERATURE_UNIT,
  payload,
});
