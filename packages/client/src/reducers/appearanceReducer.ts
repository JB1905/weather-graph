import {
  SET_BACKGROUND_COLOR,
  RESET_BACKGROUND_COLOR,
} from 'actions/appearanceActions';

import { AppearanceState } from 'interfaces/AppearanceState';

import type { AppearanceActionTypes } from 'types/AppearanceActionTypes';

const initialState: AppearanceState = {
  backgroundColor: ['#4844eb', '#0400ba'],
};

const appearanceReducer = (
  state = initialState,
  action: AppearanceActionTypes
) => {
  switch (action.type) {
    case SET_BACKGROUND_COLOR:
      return { ...state, backgroundColor: action.payload };

    case RESET_BACKGROUND_COLOR:
      return initialState;

    default:
      return state;
  }
};

export default appearanceReducer;
