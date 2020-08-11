export const SET_BACKGROUND_COLOR = "SET_BACKGROUND_COLOR";
export const RESET_BACKGROUND_COLOR = "RESET_BACKGROUND_COLOR";

// TODO add types
export const setBackgroundColor = (payload: any) => ({
  type: SET_BACKGROUND_COLOR,
  payload,
});

export const resetBackgroundColor = () => ({
  type: RESET_BACKGROUND_COLOR,
});
