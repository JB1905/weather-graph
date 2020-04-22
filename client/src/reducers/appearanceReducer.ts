import { SET_BACKGROUND_COLOR } from 'actions/appearanceActions';

import { AppearanceState } from 'interfaces/AppearanceState';

import { AppearanceActionTypes } from 'types/AppearanceActionTypes';

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

    default:
      return state;
  }
};

export default appearanceReducer;
