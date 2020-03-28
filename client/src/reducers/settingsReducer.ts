import { setBackground } from '../helpers';
import { getUnit } from '../helpers/units';

const defaultSettings = {
  unit: getUnit() || 'C',
  hourlyDisplay: 'summary',
};

const settingsReducer = (state = defaultSettings, action: any) => {
  switch (action.type) {
    case 'SET_BACKGROUND_COLOR': {
      const gradient = setBackground(action.payload, action.isNight);

      return { ...state, gradient };
    }

    case 'SET_UNIT': {
      return { ...state, unit: action.payload };
    }

    case 'SET_HOURLY_DISPLAY': {
      return { ...state, hourlyDisplay: action.payload };
    }

    default:
      return state;
  }
};

export default settingsReducer;
