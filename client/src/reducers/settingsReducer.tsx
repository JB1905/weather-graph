import { setBackground } from '../helpers';

const defaultSettings = {
  gradientStart: '#4844eb',
  gradientStop: '#0400ba',
  unit: 'C'
};

const settingsReducer = (state = defaultSettings, action: any) => {
  switch (action.type) {
    case 'SET_BACKGROUND_COLOR': {
      const colors = setBackground(action.payload);

      return {
        gradientStart: colors[0],
        gradientStop: colors[1],
        ...state
      };
    }

    case 'SET_UNIT': {
      return {
        unit: action.payload,
        ...state
      };
    }

    default:
      return state;
  }
};

export default settingsReducer;
