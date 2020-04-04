import { SET_TEMPERATURE_UNIT } from '../actions/settingsActions';

import { TemperatureUnit } from '../enums/temperatureUnit';

const initialState = {
  temperatureUnit: TemperatureUnit.CELSIUS,
};

const unitReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_TEMPERATURE_UNIT: {
      return { ...state, temperatureUnit: action.payload };
    }

    default:
      return state;
  }
};

export default unitReducer;
