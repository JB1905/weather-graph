import { SET_TEMPERATURE_UNIT } from '../actions/settingsActions';

import { TemperatureUnit } from '../enums/temperatureUnit';

import { UnitState } from '../interfaces/UnitState';

import { UnitActionTypes } from '../types/UnitActionTypes';

const initialState: UnitState = {
  temperatureUnit: TemperatureUnit.Celsius,
};

const unitReducer = (state = initialState, action: UnitActionTypes) => {
  switch (action.type) {
    case SET_TEMPERATURE_UNIT:
      return { ...state, temperatureUnit: action.payload };

    default:
      return state;
  }
};

export default unitReducer;
