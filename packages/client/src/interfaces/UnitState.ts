import { TemperatureUnit } from 'enums/temperatureUnit';

import { SET_TEMPERATURE_UNIT } from 'actions/settingsActions';

export interface UnitState {
  temperatureUnit: TemperatureUnit;
}

export interface SetTemperatureUnitAction {
  type: typeof SET_TEMPERATURE_UNIT;
  payload: TemperatureUnit;
}
