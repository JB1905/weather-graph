import { SET_BACKGROUND_COLOR } from '../actions/appearanceActions';

const initialState = {
  backgroundColor: ['#4844eb', '#0400ba'],
};

const appearanceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_BACKGROUND_COLOR: {
      return { ...state, backgroundColor: action.payload };
    }

    default:
      return state;
  }
};

export default appearanceReducer;
