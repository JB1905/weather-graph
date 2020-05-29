import { TemperatureUnit } from 'enums/TemperatureUnit';

import { SET_TEMPERATURE_UNIT } from 'actions/settingsActions';

export interface UnitState {
  readonly temperatureUnit: TemperatureUnit;
}

export interface SetTemperatureUnitAction {
  readonly type: typeof SET_TEMPERATURE_UNIT;
  readonly payload: TemperatureUnit;
}
