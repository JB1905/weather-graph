import { TemperatureUnit } from 'enums/TemperatureUnit';

import { SET_TEMPERATURE_UNIT } from 'state/actions';

// TODO typeof keyof TemperatureUnit
export interface UnitState {
  readonly temperatureUnit: TemperatureUnit;
}

// TODO typeof keyof TemperatureUnit
export interface SetTemperatureUnitAction {
  readonly type: typeof SET_TEMPERATURE_UNIT;
  readonly payload: TemperatureUnit;
}
