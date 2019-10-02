import { setBackground, getUnit } from '../helpers';

const defaultSettings = {
  gradientStart: '#4844eb',
  gradientStop: '#0400ba',
  unit: getUnit() || 'C'
};

const settingsReducer = (state = defaultSettings, action: any) => {
  switch (action.type) {
    case 'SET_BACKGROUND_COLOR': {
      const colors = setBackground(action.payload);

      return {
        ...state,
        gradientStart: colors[0],
        gradientStop: colors[1]
      };
    }

    case 'SET_UNIT': {
      return {
        ...state,
        unit: action.payload
      };
    }

    default:
      return defaultSettings;
  }
};

export default settingsReducer;
