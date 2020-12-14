import { TemperatureUnit } from 'enums/TemperatureUnit';

export const SET_TEMPERATURE_UNIT = 'SET_TEMPERATURE_UNIT';

// TODO typeof keyof TemperatureUnit
export const setTemperatureUnit = (payload: TemperatureUnit) => ({
  type: SET_TEMPERATURE_UNIT,
  payload,
});
