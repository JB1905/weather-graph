export const SET_BACKGROUND_COLOR = 'SET_BACKGROUND_COLOR';
export const RESET_BACKGROUND_COLOR = 'RESET_BACKGROUND_COLOR';

export const setBackgroundColor = (
  payload: string[]
  // payload: [colorStart: string, colorStop: string]
) => ({
  type: SET_BACKGROUND_COLOR,
  payload,
});

export const resetBackgroundColor = () => ({
  type: RESET_BACKGROUND_COLOR,
});
